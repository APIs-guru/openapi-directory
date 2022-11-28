import { SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplate } from "./emailtemplate";
import { IdpConfig } from "./idpconfig";
/**
 * Response of getting the project configuration.
**/
export declare class IdentitytoolkitRelyingpartyGetProjectConfigResponse extends SpeakeasyBase {
    allowPasswordUser?: boolean;
    apiKey?: string;
    authorizedDomains?: string[];
    changeEmailTemplate?: EmailTemplate;
    dynamicLinksDomain?: string;
    enableAnonymousUser?: boolean;
    idpConfig?: IdpConfig[];
    legacyResetPasswordTemplate?: EmailTemplate;
    projectId?: string;
    resetPasswordTemplate?: EmailTemplate;
    useEmailSending?: boolean;
    verifyEmailTemplate?: EmailTemplate;
}
