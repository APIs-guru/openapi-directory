import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DemoteMasterMySqlReplicaConfiguration
/** 
 * Read-replica configuration specific to MySQL databases.
**/
export class DemoteMasterMySqlReplicaConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @Metadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @Metadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
