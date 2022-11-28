import { SpeakeasyBase } from "../../../internal/utils";
import { AuxiliaryVersionConfig } from "./auxiliaryversionconfig";
import { KerberosConfig } from "./kerberosconfig";
import { AuxiliaryVersionConfigInput } from "./auxiliaryversionconfig";
export declare enum HiveMetastoreConfigEndpointProtocolEnum {
    EndpointProtocolUnspecified = "ENDPOINT_PROTOCOL_UNSPECIFIED",
    Thrift = "THRIFT",
    Grpc = "GRPC"
}
/**
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
**/
export declare class HiveMetastoreConfig extends SpeakeasyBase {
    auxiliaryVersions?: Map<string, AuxiliaryVersionConfig>;
    configOverrides?: Map<string, string>;
    endpointProtocol?: HiveMetastoreConfigEndpointProtocolEnum;
    kerberosConfig?: KerberosConfig;
    version?: string;
}
/**
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
**/
export declare class HiveMetastoreConfigInput extends SpeakeasyBase {
    auxiliaryVersions?: Map<string, AuxiliaryVersionConfigInput>;
    configOverrides?: Map<string, string>;
    endpointProtocol?: HiveMetastoreConfigEndpointProtocolEnum;
    kerberosConfig?: KerberosConfig;
    version?: string;
}
