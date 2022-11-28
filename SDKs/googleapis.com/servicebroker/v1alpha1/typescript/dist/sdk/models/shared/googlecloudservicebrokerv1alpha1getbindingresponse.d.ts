import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `GetBinding()` method.
**/
export declare class GoogleCloudServicebrokerV1alpha1GetBindingResponse extends SpeakeasyBase {
    credentials?: Map<string, any>;
    description?: string;
    routeServiceUrl?: string;
    syslogDrainUrl?: string;
    volumeMounts?: Map<string, any>[];
}
