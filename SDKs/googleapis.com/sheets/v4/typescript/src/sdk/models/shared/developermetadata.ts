import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadataLocation } from "./developermetadatalocation";


export enum DeveloperMetadataVisibilityEnum {
    DeveloperMetadataVisibilityUnspecified = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
    Document = "DOCUMENT",
    Project = "PROJECT"
}


// DeveloperMetadata
/** 
 * Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
**/
export class DeveloperMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: DeveloperMetadataLocation;

  @SpeakeasyMetadata({ data: "json, name=metadataId" })
  metadataId?: number;

  @SpeakeasyMetadata({ data: "json, name=metadataKey" })
  metadataKey?: string;

  @SpeakeasyMetadata({ data: "json, name=metadataValue" })
  metadataValue?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: DeveloperMetadataVisibilityEnum;
}
