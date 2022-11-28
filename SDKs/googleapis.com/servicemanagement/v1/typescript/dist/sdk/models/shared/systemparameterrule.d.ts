import { SpeakeasyBase } from "../../../internal/utils";
import { SystemParameter } from "./systemparameter";
/**
 * Define a system parameter rule mapping system parameter definitions to methods.
**/
export declare class SystemParameterRule extends SpeakeasyBase {
    parameters?: SystemParameter[];
    selector?: string;
}
