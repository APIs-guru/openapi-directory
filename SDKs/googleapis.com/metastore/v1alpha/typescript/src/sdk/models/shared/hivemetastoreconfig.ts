import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuxiliaryVersionConfigInput } from "./auxiliaryversionconfig";
import { KerberosConfig } from "./kerberosconfig";
import { AuxiliaryVersionConfig } from "./auxiliaryversionconfig";


export enum HiveMetastoreConfigEndpointProtocolEnum {
    EndpointProtocolUnspecified = "ENDPOINT_PROTOCOL_UNSPECIFIED",
    Thrift = "THRIFT",
    Grpc = "GRPC"
}


// HiveMetastoreConfigInput
/** 
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
**/
export class HiveMetastoreConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auxiliaryVersions", elemType: AuxiliaryVersionConfigInput })
  auxiliaryVersions?: Map<string, AuxiliaryVersionConfigInput>;

  @SpeakeasyMetadata({ data: "json, name=configOverrides" })
  configOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=endpointProtocol" })
  endpointProtocol?: HiveMetastoreConfigEndpointProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=kerberosConfig" })
  kerberosConfig?: KerberosConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// HiveMetastoreConfig
/** 
 * Specifies configuration information specific to running Hive metastore software as the metastore service.
**/
export class HiveMetastoreConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auxiliaryVersions", elemType: AuxiliaryVersionConfig })
  auxiliaryVersions?: Map<string, AuxiliaryVersionConfig>;

  @SpeakeasyMetadata({ data: "json, name=configOverrides" })
  configOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=endpointProtocol" })
  endpointProtocol?: HiveMetastoreConfigEndpointProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=kerberosConfig" })
  kerberosConfig?: KerberosConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
