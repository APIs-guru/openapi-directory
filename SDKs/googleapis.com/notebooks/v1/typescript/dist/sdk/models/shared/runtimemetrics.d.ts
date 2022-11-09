import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains runtime daemon metrics, such as OS and kernels and sessions stats.
**/
export declare class RuntimeMetrics extends SpeakeasyBase {
    systemMetrics?: Map<string, string>;
}
