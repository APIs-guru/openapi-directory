import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MysqlSslConfig
/** 
 * MySQL SSL configuration information.
**/
export class MysqlSslConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=caCertificateSet" })
  caCertificateSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCertificateSet" })
  clientCertificateSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @SpeakeasyMetadata({ data: "json, name=clientKeySet" })
  clientKeySet?: boolean;
}


// MysqlSslConfigInput
/** 
 * MySQL SSL configuration information.
**/
export class MysqlSslConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;
}
