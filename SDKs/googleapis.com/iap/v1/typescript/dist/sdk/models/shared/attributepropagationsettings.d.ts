import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AttributePropagationSettingsOutputCredentialsEnum {
    OutputCredentialsUnspecified = "OUTPUT_CREDENTIALS_UNSPECIFIED",
    Header = "HEADER",
    Jwt = "JWT",
    Rctoken = "RCTOKEN"
}
/**
 * Configuration for propagating attributes to customer applications protected by IAP. These attributes may be SAML attributes from a 3rd party IdP, or potentially other sources in the future.
**/
export declare class AttributePropagationSettings extends SpeakeasyBase {
    enable?: boolean;
    expression?: string;
    outputCredentials?: AttributePropagationSettingsOutputCredentialsEnum[];
}
