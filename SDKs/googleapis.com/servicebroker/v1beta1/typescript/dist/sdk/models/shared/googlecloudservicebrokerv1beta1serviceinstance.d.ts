import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message describing inputs to Provision and Update Service instance requests.
**/
export declare class GoogleCloudServicebrokerV1beta1ServiceInstance extends SpeakeasyBase {
    context?: Map<string, any>;
    createTime?: string;
    deploymentName?: string;
    description?: string;
    instanceId?: string;
    organizationGuid?: string;
    parameters?: Map<string, any>;
    planId?: string;
    previousValues?: Map<string, any>;
    resourceName?: string;
    serviceId?: string;
    spaceGuid?: string;
}
