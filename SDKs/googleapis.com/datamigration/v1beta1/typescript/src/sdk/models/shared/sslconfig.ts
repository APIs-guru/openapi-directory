import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SslConfigTypeEnum {
    SslTypeUnspecified = "SSL_TYPE_UNSPECIFIED",
    ServerOnly = "SERVER_ONLY",
    ServerClient = "SERVER_CLIENT"
}


// SslConfig
/** 
 * SSL configuration information.
**/
export class SslConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SslConfigTypeEnum;
}


// SslConfigInput
/** 
 * SSL configuration information.
**/
export class SslConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;
}
