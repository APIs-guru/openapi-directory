import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfiguration } from "./networkconfiguration";



export class NetworkConfigurationCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurations", elemType: NetworkConfiguration })
  configurations?: NetworkConfiguration[];
}
