import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli).
**/
export declare class BasicService extends SpeakeasyBase {
    serviceLabels?: Map<string, string>;
    serviceType?: string;
}
