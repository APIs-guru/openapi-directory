import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvVariable } from "./envvariable";


// Action
/** 
 * An action that gets executed during initialization of the replicas.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=commands" })
  commands?: string[];

  @Metadata({ data: "json, name=envVariables", elemType: shared.EnvVariable })
  envVariables?: EnvVariable[];

  @Metadata({ data: "json, name=timeoutMilliSeconds" })
  timeoutMilliSeconds?: number;
}
