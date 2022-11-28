import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFirewallsIdActionsApplyToResourcesPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Configuration for type label_selector, required if type is `label_selector`
**/
export declare class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Configuration for type server, required if type is `server`
**/
export declare class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer extends SpeakeasyBase {
    id: number;
}
export declare enum PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources extends SpeakeasyBase {
    labelSelector?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector;
    server?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer;
    type?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum;
}
export declare class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest extends SpeakeasyBase {
    applyTo: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources[];
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: PostFirewallsIdActionsApplyToResourcesActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources[];
    started: string;
    status: PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum;
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseMeta extends SpeakeasyBase {
    pagination: PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination;
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponse extends SpeakeasyBase {
    actions: PostFirewallsIdActionsApplyToResourcesActionsResponseAction[];
    meta?: PostFirewallsIdActionsApplyToResourcesActionsResponseMeta;
}
export declare class PostFirewallsIdActionsApplyToResourcesRequest extends SpeakeasyBase {
    pathParams: PostFirewallsIdActionsApplyToResourcesPathParams;
    request?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest;
}
export declare class PostFirewallsIdActionsApplyToResourcesResponse extends SpeakeasyBase {
    actionsResponse?: PostFirewallsIdActionsApplyToResourcesActionsResponse;
    contentType: string;
    statusCode: number;
}
