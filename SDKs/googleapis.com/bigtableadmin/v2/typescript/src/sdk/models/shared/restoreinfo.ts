import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RestoreInfoSourceTypeEnum {
    RestoreSourceTypeUnspecified = "RESTORE_SOURCE_TYPE_UNSPECIFIED",
    Backup = "BACKUP"
}


// RestoreInfo
/** 
 * Information about a table restore.
**/
export class RestoreInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: RestoreInfoSourceTypeEnum;
}
