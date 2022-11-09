import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MySqlReplicaConfiguration
/** 
 * Read-replica configuration specific to MySQL databases.
**/
export class MySqlReplicaConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @Metadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @Metadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @Metadata({ data: "json, name=connectRetryInterval" })
  connectRetryInterval?: number;

  @Metadata({ data: "json, name=dumpFilePath" })
  dumpFilePath?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=masterHeartbeatPeriod" })
  masterHeartbeatPeriod?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=sslCipher" })
  sslCipher?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=verifyServerCertificate" })
  verifyServerCertificate?: boolean;
}
