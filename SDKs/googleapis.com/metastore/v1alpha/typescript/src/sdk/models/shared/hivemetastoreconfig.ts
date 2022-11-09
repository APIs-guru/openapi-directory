import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuxiliaryVersionConfig } from "./auxiliaryversionconfig";
import { KerberosConfig } from "./kerberosconfig";

export enum HiveMetastoreConfigEndpointProtocolEnum {
    EndpointProtocolUnspecified = "ENDPOINT_PROTOCOL_UNSPECIFIED"
,    Thrift = "THRIFT"
,    Grpc = "GRPC"
}


// HiveMetastoreConfig
/** 
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
**/
export class HiveMetastoreConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=auxiliaryVersions", elemType: shared.AuxiliaryVersionConfig })
  auxiliaryVersions?: Map<string, AuxiliaryVersionConfig>;

  @Metadata({ data: "json, name=configOverrides" })
  configOverrides?: Map<string, string>;

  @Metadata({ data: "json, name=endpointProtocol" })
  endpointProtocol?: HiveMetastoreConfigEndpointProtocolEnum;

  @Metadata({ data: "json, name=kerberosConfig" })
  kerberosConfig?: KerberosConfig;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
