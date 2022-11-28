import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplate } from "./emailtemplate";
import { IdpConfig } from "./idpconfig";



// IdentitytoolkitRelyingpartyGetProjectConfigResponse
/** 
 * Response of getting the project configuration.
**/
export class IdentitytoolkitRelyingpartyGetProjectConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPasswordUser" })
  allowPasswordUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizedDomains" })
  authorizedDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=changeEmailTemplate" })
  changeEmailTemplate?: EmailTemplate;

  @SpeakeasyMetadata({ data: "json, name=dynamicLinksDomain" })
  dynamicLinksDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=enableAnonymousUser" })
  enableAnonymousUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idpConfig", elemType: IdpConfig })
  idpConfig?: IdpConfig[];

  @SpeakeasyMetadata({ data: "json, name=legacyResetPasswordTemplate" })
  legacyResetPasswordTemplate?: EmailTemplate;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=resetPasswordTemplate" })
  resetPasswordTemplate?: EmailTemplate;

  @SpeakeasyMetadata({ data: "json, name=useEmailSending" })
  useEmailSending?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifyEmailTemplate" })
  verifyEmailTemplate?: EmailTemplate;
}
