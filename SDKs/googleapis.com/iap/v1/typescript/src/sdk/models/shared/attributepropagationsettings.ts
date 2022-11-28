import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AttributePropagationSettingsOutputCredentialsEnum {
    OutputCredentialsUnspecified = "OUTPUT_CREDENTIALS_UNSPECIFIED",
    Header = "HEADER",
    Jwt = "JWT",
    Rctoken = "RCTOKEN"
}


// AttributePropagationSettings
/** 
 * Configuration for propagating attributes to customer applications protected by IAP. These attributes may be SAML attributes from a 3rd party IdP, or potentially other sources in the future.
**/
export class AttributePropagationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=outputCredentials" })
  outputCredentials?: AttributePropagationSettingsOutputCredentialsEnum[];
}
