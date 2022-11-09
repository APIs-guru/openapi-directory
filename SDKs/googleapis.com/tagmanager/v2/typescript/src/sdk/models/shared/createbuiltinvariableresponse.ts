import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuiltInVariable } from "./builtinvariable";


export class CreateBuiltInVariableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=builtInVariable", elemType: shared.BuiltInVariable })
  builtInVariable?: BuiltInVariable[];
}
