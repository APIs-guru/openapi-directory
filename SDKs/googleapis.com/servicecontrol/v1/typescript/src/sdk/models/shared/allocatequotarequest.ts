import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QuotaOperation } from "./quotaoperation";


// AllocateQuotaRequest
/** 
 * Request message for the AllocateQuota method.
**/
export class AllocateQuotaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocateOperation" })
  allocateOperation?: QuotaOperation;

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
