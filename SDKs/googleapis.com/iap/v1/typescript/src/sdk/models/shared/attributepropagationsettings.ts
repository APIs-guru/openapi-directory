import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AttributePropagationSettingsOutputCredentialsEnum {
    OutputCredentialsUnspecified = "OUTPUT_CREDENTIALS_UNSPECIFIED"
,    Header = "HEADER"
,    Jwt = "JWT"
,    Rctoken = "RCTOKEN"
}


// AttributePropagationSettings
/** 
 * Configuration for propagating attributes to customer applications protected by IAP. These attributes may be SAML attributes from a 3rd party IdP, or potentially other sources in the future.
**/
export class AttributePropagationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=enable" })
  enable?: boolean;

  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=outputCredentials" })
  outputCredentials?: AttributePropagationSettingsOutputCredentialsEnum[];
}
