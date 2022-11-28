import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientConfig } from "./clientconfig";



export class ClientStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config", elemType: ClientConfig })
  config?: ClientConfig[];
}
