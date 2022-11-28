import { SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
export declare enum IssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Deprecation = "DEPRECATION",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Issues include warnings, errors, and deprecation notices.
**/
export declare class Issue extends SpeakeasyBase {
    description?: string;
    severity?: IssueSeverityEnum;
    sourcePosition?: SourcePosition;
}
