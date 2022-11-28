import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpgradeApplianceRequest
/** 
 * Request message for 'UpgradeAppliance' request.
**/
export class UpgradeApplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
