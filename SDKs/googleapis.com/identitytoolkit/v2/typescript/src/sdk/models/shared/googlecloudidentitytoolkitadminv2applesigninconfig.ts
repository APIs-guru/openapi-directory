import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig } from "./googlecloudidentitytoolkitadminv2codeflowconfig";


// GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig
/** 
 * Additional config for SignInWithApple.
**/
export class GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleIds" })
  bundleIds?: string[];

  @Metadata({ data: "json, name=codeFlowConfig" })
  codeFlowConfig?: GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig;
}
