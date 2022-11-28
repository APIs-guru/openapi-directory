import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadataLocation } from "./developermetadatalocation";


export enum DeveloperMetadataLookupLocationMatchingStrategyEnum {
    DeveloperMetadataLocationMatchingStrategyUnspecified = "DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED",
    ExactLocation = "EXACT_LOCATION",
    IntersectingLocation = "INTERSECTING_LOCATION"
}

export enum DeveloperMetadataLookupLocationTypeEnum {
    DeveloperMetadataLocationTypeUnspecified = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED",
    Row = "ROW",
    Column = "COLUMN",
    Sheet = "SHEET",
    Spreadsheet = "SPREADSHEET"
}

export enum DeveloperMetadataLookupVisibilityEnum {
    DeveloperMetadataVisibilityUnspecified = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
    Document = "DOCUMENT",
    Project = "PROJECT"
}


// DeveloperMetadataLookup
/** 
 * Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
**/
export class DeveloperMetadataLookup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationMatchingStrategy" })
  locationMatchingStrategy?: DeveloperMetadataLookupLocationMatchingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: DeveloperMetadataLookupLocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=metadataId" })
  metadataId?: number;

  @SpeakeasyMetadata({ data: "json, name=metadataKey" })
  metadataKey?: string;

  @SpeakeasyMetadata({ data: "json, name=metadataLocation" })
  metadataLocation?: DeveloperMetadataLocation;

  @SpeakeasyMetadata({ data: "json, name=metadataValue" })
  metadataValue?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: DeveloperMetadataLookupVisibilityEnum;
}
