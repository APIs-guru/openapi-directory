import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A condition type that checks whether a log message in the scoping project (https://cloud.google.com/monitoring/api/v3#project_name) satisfies the given filter. Logs from other projects in the metrics scope are not evaluated.
**/
export declare class LogMatch extends SpeakeasyBase {
    filter?: string;
    labelExtractors?: Map<string, string>;
}
