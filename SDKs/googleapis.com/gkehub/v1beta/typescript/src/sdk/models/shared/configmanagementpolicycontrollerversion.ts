import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementPolicyControllerVersion
/** 
 * The build version of Gatekeeper Policy Controller is using.
**/
export class ConfigManagementPolicyControllerVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: string;
}
