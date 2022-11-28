import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `CreateBinding()` method.
**/
export declare class GoogleCloudServicebrokerV1alpha1CreateBindingResponse extends SpeakeasyBase {
    credentials?: Map<string, any>;
    description?: string;
    operation?: string;
    routeServiceUrl?: string;
    syslogDrainUrl?: string;
    volumeMounts?: Map<string, any>[];
}
