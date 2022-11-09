import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RestoreServiceRequestRestoreTypeEnum {
    RestoreTypeUnspecified = "RESTORE_TYPE_UNSPECIFIED"
,    Full = "FULL"
,    MetadataOnly = "METADATA_ONLY"
}


// RestoreServiceRequest
/** 
 * Request message for DataprocMetastore.Restore.
**/
export class RestoreServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=restoreType" })
  restoreType?: RestoreServiceRequestRestoreTypeEnum;
}
