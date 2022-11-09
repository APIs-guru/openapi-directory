import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { GcsProfile } from "./gcsprofile";
import { MysqlProfile } from "./mysqlprofile";
import { OracleProfile } from "./oracleprofile";
import { PrivateConnectivity } from "./privateconnectivity";


export class ConnectionProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=forwardSshConnectivity" })
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;

  @Metadata({ data: "json, name=gcsProfile" })
  gcsProfile?: GcsProfile;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mysqlProfile" })
  mysqlProfile?: MysqlProfile;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=noConnectivity" })
  noConnectivity?: Map<string, any>;

  @Metadata({ data: "json, name=oracleProfile" })
  oracleProfile?: OracleProfile;

  @Metadata({ data: "json, name=privateConnectivity" })
  privateConnectivity?: PrivateConnectivity;

  @Metadata({ data: "json, name=staticServiceIpConnectivity" })
  staticServiceIpConnectivity?: Map<string, any>;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
