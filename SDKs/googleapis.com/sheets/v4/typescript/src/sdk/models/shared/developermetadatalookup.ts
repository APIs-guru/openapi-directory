import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeveloperMetadataLocation } from "./developermetadatalocation";

export enum DeveloperMetadataLookupLocationMatchingStrategyEnum {
    DeveloperMetadataLocationMatchingStrategyUnspecified = "DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED"
,    ExactLocation = "EXACT_LOCATION"
,    IntersectingLocation = "INTERSECTING_LOCATION"
}

export enum DeveloperMetadataLookupLocationTypeEnum {
    DeveloperMetadataLocationTypeUnspecified = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
,    Row = "ROW"
,    Column = "COLUMN"
,    Sheet = "SHEET"
,    Spreadsheet = "SPREADSHEET"
}

export enum DeveloperMetadataLookupVisibilityEnum {
    DeveloperMetadataVisibilityUnspecified = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
,    Document = "DOCUMENT"
,    Project = "PROJECT"
}


// DeveloperMetadataLookup
/** 
 * Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
**/
export class DeveloperMetadataLookup extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationMatchingStrategy" })
  locationMatchingStrategy?: DeveloperMetadataLookupLocationMatchingStrategyEnum;

  @Metadata({ data: "json, name=locationType" })
  locationType?: DeveloperMetadataLookupLocationTypeEnum;

  @Metadata({ data: "json, name=metadataId" })
  metadataId?: number;

  @Metadata({ data: "json, name=metadataKey" })
  metadataKey?: string;

  @Metadata({ data: "json, name=metadataLocation" })
  metadataLocation?: DeveloperMetadataLocation;

  @Metadata({ data: "json, name=metadataValue" })
  metadataValue?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: DeveloperMetadataLookupVisibilityEnum;
}
