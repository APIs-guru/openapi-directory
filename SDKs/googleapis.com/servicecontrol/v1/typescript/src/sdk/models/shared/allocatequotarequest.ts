import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaOperation } from "./quotaoperation";



// AllocateQuotaRequest
/** 
 * Request message for the AllocateQuota method.
**/
export class AllocateQuotaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocateOperation" })
  allocateOperation?: QuotaOperation;

  @SpeakeasyMetadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
