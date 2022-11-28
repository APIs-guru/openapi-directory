import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { GcsProfile } from "./gcsprofile";
import { MysqlProfileInput } from "./mysqlprofile";
import { OracleProfile } from "./oracleprofile";
import { PrivateConnectivity } from "./privateconnectivity";
import { MysqlProfile } from "./mysqlprofile";
export declare class ConnectionProfileInput extends SpeakeasyBase {
    displayName?: string;
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    gcsProfile?: GcsProfile;
    labels?: Map<string, string>;
    mysqlProfile?: MysqlProfileInput;
    noConnectivity?: Map<string, any>;
    oracleProfile?: OracleProfile;
    privateConnectivity?: PrivateConnectivity;
    staticServiceIpConnectivity?: Map<string, any>;
}
export declare class ConnectionProfile extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    forwardSshConnectivity?: ForwardSshTunnelConnectivity;
    gcsProfile?: GcsProfile;
    labels?: Map<string, string>;
    mysqlProfile?: MysqlProfile;
    name?: string;
    noConnectivity?: Map<string, any>;
    oracleProfile?: OracleProfile;
    privateConnectivity?: PrivateConnectivity;
    staticServiceIpConnectivity?: Map<string, any>;
    updateTime?: string;
}
