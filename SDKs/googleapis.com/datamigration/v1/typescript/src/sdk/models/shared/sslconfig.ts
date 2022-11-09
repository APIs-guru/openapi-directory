import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SslConfigTypeEnum {
    SslTypeUnspecified = "SSL_TYPE_UNSPECIFIED"
,    ServerOnly = "SERVER_ONLY"
,    ServerClient = "SERVER_CLIENT"
}


// SslConfig
/** 
 * SSL configuration information.
**/
export class SslConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @Metadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @Metadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @Metadata({ data: "json, name=type" })
  type?: SslConfigTypeEnum;
}
