import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig } from "./googlecloudidentitytoolkitadminv2codeflowconfig";



// GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig
/** 
 * Additional config for SignInWithApple.
**/
export class GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleIds" })
  bundleIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=codeFlowConfig" })
  codeFlowConfig?: GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig;
}
