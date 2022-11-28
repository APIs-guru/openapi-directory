import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Compute Engine instance.
**/
export declare class InstanceInfo extends SpeakeasyBase {
    displayName?: string;
    externalIp?: string;
    interface?: string;
    internalIp?: string;
    networkTags?: string[];
    networkUri?: string;
    serviceAccount?: string;
    uri?: string;
}
