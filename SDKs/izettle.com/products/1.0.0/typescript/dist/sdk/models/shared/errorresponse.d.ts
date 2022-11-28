import { SpeakeasyBase } from "../../../internal/utils";
import { ConstraintViolation } from "./constraintviolation";
export declare class ErrorResponse extends SpeakeasyBase {
    developerMessage?: string;
    errorType?: string;
    violations?: ConstraintViolation[];
}
