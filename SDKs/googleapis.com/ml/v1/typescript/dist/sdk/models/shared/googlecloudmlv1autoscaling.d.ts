import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1MetricSpec } from "./googlecloudmlv1metricspec";
/**
 * Options for automatically scaling a model.
**/
export declare class GoogleCloudMlV1AutoScaling extends SpeakeasyBase {
    maxNodes?: number;
    metrics?: GoogleCloudMlV1MetricSpec[];
    minNodes?: number;
}
