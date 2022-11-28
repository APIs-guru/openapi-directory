import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFirewallsIdActionsRemoveFromResourcesPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Configuration for type label_selector, required if type is `label_selector`
**/
export declare class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector extends SpeakeasyBase {
    selector: string;
}
/**
 * Configuration for type server, required if type is `server`
**/
export declare class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer extends SpeakeasyBase {
    id: number;
}
export declare enum PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources extends SpeakeasyBase {
    labelSelector?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector;
    server?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer;
    type?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest extends SpeakeasyBase {
    removeFrom: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources[];
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources[];
    started: string;
    status: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta extends SpeakeasyBase {
    pagination: PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponse extends SpeakeasyBase {
    actions: PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction[];
    meta?: PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesRequest extends SpeakeasyBase {
    pathParams: PostFirewallsIdActionsRemoveFromResourcesPathParams;
    request?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesResponse extends SpeakeasyBase {
    actionsResponse?: PostFirewallsIdActionsRemoveFromResourcesActionsResponse;
    contentType: string;
    statusCode: number;
}
