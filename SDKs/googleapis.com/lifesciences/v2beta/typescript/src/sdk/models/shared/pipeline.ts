import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Secret } from "./secret";
import { Resources } from "./resources";



// Pipeline
/** 
 * Specifies a series of actions to execute, expressed as Docker containers.
**/
export class Pipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=encryptedEnvironment" })
  encryptedEnvironment?: Secret;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: Resources;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
