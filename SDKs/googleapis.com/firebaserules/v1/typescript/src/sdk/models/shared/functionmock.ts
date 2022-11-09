import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Arg } from "./arg";
import { Result } from "./result";


// FunctionMock
/** 
 * Mock function definition. Mocks must refer to a function declared by the target service. The type of the function args and result will be inferred at test time. If either the arg or result values are not compatible with function type declaration, the request will be considered invalid. More than one `FunctionMock` may be provided for a given function name so long as the `Arg` matchers are distinct. There may be only one function for a given overload where all `Arg` values are `Arg.any_value`.
**/
export class FunctionMock extends SpeakeasyBase {
  @Metadata({ data: "json, name=args", elemType: shared.Arg })
  args?: Arg[];

  @Metadata({ data: "json, name=function" })
  function?: string;

  @Metadata({ data: "json, name=result" })
  result?: Result;
}
