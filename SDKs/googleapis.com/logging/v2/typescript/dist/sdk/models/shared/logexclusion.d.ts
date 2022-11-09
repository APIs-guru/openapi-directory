import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies a set of log entries that are filtered out by a sink. If your Google Cloud resource receives a large volume of log entries, you can use exclusions to reduce your chargeable logs. Note that exclusions on organization-level and folder-level sinks don't apply to child resources. Note also that you cannot modify the _Required sink or exclude logs from it.
**/
export declare class LogExclusion extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    disabled?: boolean;
    filter?: string;
    name?: string;
    updateTime?: string;
}
