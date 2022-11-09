import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpgradeApplianceRequest
/** 
 * Request message for 'UpgradeAppliance' request.
**/
export class UpgradeApplianceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
