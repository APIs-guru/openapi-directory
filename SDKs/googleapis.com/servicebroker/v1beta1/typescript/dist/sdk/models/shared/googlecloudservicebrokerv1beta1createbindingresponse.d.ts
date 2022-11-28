import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `CreateBinding()` method.
**/
export declare class GoogleCloudServicebrokerV1beta1CreateBindingResponse extends SpeakeasyBase {
    credentials?: Map<string, any>;
    description?: string;
    operation?: string;
    routeServiceUrl?: string;
    syslogDrainUrl?: string;
    volumeMounts?: Map<string, any>[];
}
