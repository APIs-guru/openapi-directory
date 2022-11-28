import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RestoreServiceRequestRestoreTypeEnum {
    RestoreTypeUnspecified = "RESTORE_TYPE_UNSPECIFIED",
    Full = "FULL",
    MetadataOnly = "METADATA_ONLY"
}


// RestoreServiceRequest
/** 
 * Request message for DataprocMetastore.Restore.
**/
export class RestoreServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=restoreType" })
  restoreType?: RestoreServiceRequestRestoreTypeEnum;
}
