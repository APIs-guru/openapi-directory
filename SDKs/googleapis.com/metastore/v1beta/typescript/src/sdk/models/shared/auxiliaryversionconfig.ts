import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { NetworkConfigInput } from "./networkconfig";



// AuxiliaryVersionConfig
/** 
 * Configuration information for the auxiliary service versions.
**/
export class AuxiliaryVersionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configOverrides" })
  configOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// AuxiliaryVersionConfigInput
/** 
 * Configuration information for the auxiliary service versions.
**/
export class AuxiliaryVersionConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configOverrides" })
  configOverrides?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfigInput;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
