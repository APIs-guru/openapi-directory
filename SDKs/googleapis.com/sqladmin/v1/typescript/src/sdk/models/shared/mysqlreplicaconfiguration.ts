import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MySqlReplicaConfiguration
/** 
 * Read-replica configuration specific to MySQL databases.
**/
export class MySqlReplicaConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @SpeakeasyMetadata({ data: "json, name=connectRetryInterval" })
  connectRetryInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=dumpFilePath" })
  dumpFilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=masterHeartbeatPeriod" })
  masterHeartbeatPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=sslCipher" })
  sslCipher?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=verifyServerCertificate" })
  verifyServerCertificate?: boolean;
}
