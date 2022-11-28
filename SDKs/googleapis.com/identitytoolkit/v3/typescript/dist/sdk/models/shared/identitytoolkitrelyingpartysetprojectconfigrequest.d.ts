import { SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplate } from "./emailtemplate";
import { IdpConfig } from "./idpconfig";
/**
 * Request to set the project configuration.
**/
export declare class IdentitytoolkitRelyingpartySetProjectConfigRequest extends SpeakeasyBase {
    allowPasswordUser?: boolean;
    apiKey?: string;
    authorizedDomains?: string[];
    changeEmailTemplate?: EmailTemplate;
    delegatedProjectNumber?: string;
    enableAnonymousUser?: boolean;
    idpConfig?: IdpConfig[];
    legacyResetPasswordTemplate?: EmailTemplate;
    resetPasswordTemplate?: EmailTemplate;
    useEmailSending?: boolean;
    verifyEmailTemplate?: EmailTemplate;
}
