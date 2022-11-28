import { SpeakeasyBase } from "../../../internal/utils";
import { Arg } from "./arg";
import { Result } from "./result";
/**
 * Mock function definition. Mocks must refer to a function declared by the target service. The type of the function args and result will be inferred at test time. If either the arg or result values are not compatible with function type declaration, the request will be considered invalid. More than one `FunctionMock` may be provided for a given function name so long as the `Arg` matchers are distinct. There may be only one function for a given overload where all `Arg` values are `Arg.any_value`.
**/
export declare class FunctionMock extends SpeakeasyBase {
    args?: Arg[];
    function?: string;
    result?: Result;
}
