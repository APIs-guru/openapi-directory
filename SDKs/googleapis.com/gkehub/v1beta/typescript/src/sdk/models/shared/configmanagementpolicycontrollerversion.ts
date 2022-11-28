import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementPolicyControllerVersion
/** 
 * The build version of Gatekeeper Policy Controller is using.
**/
export class ConfigManagementPolicyControllerVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
