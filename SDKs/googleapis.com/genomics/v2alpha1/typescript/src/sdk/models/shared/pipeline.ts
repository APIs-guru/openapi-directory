import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";
import { Secret } from "./secret";
import { Resources } from "./resources";


// Pipeline
/** 
 * Specifies a series of actions to execute, expressed as Docker containers.
**/
export class Pipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=encryptedEnvironment" })
  encryptedEnvironment?: Secret;

  @Metadata({ data: "json, name=environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=resources" })
  resources?: Resources;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
