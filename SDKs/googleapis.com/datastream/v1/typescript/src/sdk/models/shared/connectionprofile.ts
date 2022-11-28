import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { GcsProfile } from "./gcsprofile";
import { MysqlProfile } from "./mysqlprofile";
import { OracleProfile } from "./oracleprofile";
import { PostgresqlProfile } from "./postgresqlprofile";
import { PrivateConnectivity } from "./privateconnectivity";
import { MysqlProfileInput } from "./mysqlprofile";



// ConnectionProfile
/** 
 * A set of reusable connection configurations to be used as a source or destination for a stream.
**/
export class ConnectionProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryProfile" })
  bigqueryProfile?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=forwardSshConnectivity" })
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;

  @SpeakeasyMetadata({ data: "json, name=gcsProfile" })
  gcsProfile?: GcsProfile;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mysqlProfile" })
  mysqlProfile?: MysqlProfile;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oracleProfile" })
  oracleProfile?: OracleProfile;

  @SpeakeasyMetadata({ data: "json, name=postgresqlProfile" })
  postgresqlProfile?: PostgresqlProfile;

  @SpeakeasyMetadata({ data: "json, name=privateConnectivity" })
  privateConnectivity?: PrivateConnectivity;

  @SpeakeasyMetadata({ data: "json, name=staticServiceIpConnectivity" })
  staticServiceIpConnectivity?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ConnectionProfileInput
/** 
 * A set of reusable connection configurations to be used as a source or destination for a stream.
**/
export class ConnectionProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryProfile" })
  bigqueryProfile?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=forwardSshConnectivity" })
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;

  @SpeakeasyMetadata({ data: "json, name=gcsProfile" })
  gcsProfile?: GcsProfile;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mysqlProfile" })
  mysqlProfile?: MysqlProfileInput;

  @SpeakeasyMetadata({ data: "json, name=oracleProfile" })
  oracleProfile?: OracleProfile;

  @SpeakeasyMetadata({ data: "json, name=postgresqlProfile" })
  postgresqlProfile?: PostgresqlProfile;

  @SpeakeasyMetadata({ data: "json, name=privateConnectivity" })
  privateConnectivity?: PrivateConnectivity;

  @SpeakeasyMetadata({ data: "json, name=staticServiceIpConnectivity" })
  staticServiceIpConnectivity?: Map<string, any>;
}
