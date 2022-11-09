import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkConfig } from "./networkconfig";


// AuxiliaryVersionConfig
/** 
 * Configuration information for the auxiliary service versions.
**/
export class AuxiliaryVersionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=configOverrides" })
  configOverrides?: Map<string, string>;

  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
