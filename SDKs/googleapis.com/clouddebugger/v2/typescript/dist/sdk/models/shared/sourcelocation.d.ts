import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a location in the source code.
**/
export declare class SourceLocation extends SpeakeasyBase {
    column?: number;
    line?: number;
    path?: string;
}
