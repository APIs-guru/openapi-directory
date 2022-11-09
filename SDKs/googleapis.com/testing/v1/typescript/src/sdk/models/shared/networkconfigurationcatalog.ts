import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkConfiguration } from "./networkconfiguration";


export class NetworkConfigurationCatalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurations", elemType: shared.NetworkConfiguration })
  configurations?: NetworkConfiguration[];
}
