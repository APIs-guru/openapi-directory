import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuiltInVariable } from "./builtinvariable";



export class CreateBuiltInVariableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtInVariable", elemType: BuiltInVariable })
  builtInVariable?: BuiltInVariable[];
}
