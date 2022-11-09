import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EmailTemplate } from "./emailtemplate";
import { IdpConfig } from "./idpconfig";
import { EmailTemplate } from "./emailtemplate";
import { EmailTemplate } from "./emailtemplate";
import { EmailTemplate } from "./emailtemplate";


// IdentitytoolkitRelyingpartySetProjectConfigRequest
/** 
 * Request to set the project configuration.
**/
export class IdentitytoolkitRelyingpartySetProjectConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPasswordUser" })
  allowPasswordUser?: boolean;

  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=authorizedDomains" })
  authorizedDomains?: string[];

  @Metadata({ data: "json, name=changeEmailTemplate" })
  changeEmailTemplate?: EmailTemplate;

  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=enableAnonymousUser" })
  enableAnonymousUser?: boolean;

  @Metadata({ data: "json, name=idpConfig", elemType: shared.IdpConfig })
  idpConfig?: IdpConfig[];

  @Metadata({ data: "json, name=legacyResetPasswordTemplate" })
  legacyResetPasswordTemplate?: EmailTemplate;

  @Metadata({ data: "json, name=resetPasswordTemplate" })
  resetPasswordTemplate?: EmailTemplate;

  @Metadata({ data: "json, name=useEmailSending" })
  useEmailSending?: boolean;

  @Metadata({ data: "json, name=verifyEmailTemplate" })
  verifyEmailTemplate?: EmailTemplate;
}
