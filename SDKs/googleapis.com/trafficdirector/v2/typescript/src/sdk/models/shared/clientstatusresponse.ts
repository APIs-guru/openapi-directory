import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientConfig } from "./clientconfig";


export class ClientStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=config", elemType: shared.ClientConfig })
  config?: ClientConfig[];
}
