import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DemoteMasterMySqlReplicaConfiguration
/** 
 * Read-replica configuration specific to MySQL databases.
**/
export class DemoteMasterMySqlReplicaConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
