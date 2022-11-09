import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MysqlSslConfig
/** 
 * MySQL SSL configuration information.
**/
export class MysqlSslConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @Metadata({ data: "json, name=caCertificateSet" })
  caCertificateSet?: boolean;

  @Metadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @Metadata({ data: "json, name=clientCertificateSet" })
  clientCertificateSet?: boolean;

  @Metadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @Metadata({ data: "json, name=clientKeySet" })
  clientKeySet?: boolean;
}
