import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvVariable } from "./envvariable";



// Action
/** 
 * An action that gets executed during initialization of the replicas.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commands" })
  commands?: string[];

  @SpeakeasyMetadata({ data: "json, name=envVariables", elemType: EnvVariable })
  envVariables?: EnvVariable[];

  @SpeakeasyMetadata({ data: "json, name=timeoutMilliSeconds" })
  timeoutMilliSeconds?: number;
}
