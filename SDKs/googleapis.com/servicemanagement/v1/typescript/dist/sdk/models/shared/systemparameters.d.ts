import { SpeakeasyBase } from "../../../internal/utils";
import { SystemParameterRule } from "./systemparameterrule";
/**
 * ### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters.
**/
export declare class SystemParameters extends SpeakeasyBase {
    rules?: SystemParameterRule[];
}
