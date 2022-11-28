import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsCreateImagePathParams extends SpeakeasyBase {
    id: number;
}
/**
 * User-defined labels (key-value pairs)
**/
export declare class PostServersIdActionsCreateImageCreateImageRequestLabels extends SpeakeasyBase {
    labelkey?: string;
}
export declare enum PostServersIdActionsCreateImageCreateImageRequestTypeEnum {
    Snapshot = "snapshot",
    Backup = "backup"
}
export declare class PostServersIdActionsCreateImageCreateImageRequest extends SpeakeasyBase {
    description?: string;
    labels?: PostServersIdActionsCreateImageCreateImageRequestLabels;
    type?: PostServersIdActionsCreateImageCreateImageRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsCreateImage201ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsCreateImage201ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsCreateImage201ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsCreateImage201ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsCreateImage201ApplicationJsonActionResources[];
    started: string;
    status: PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum;
}
/**
 * Information about the Server the Image was created from
**/
export declare class PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare enum PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
**/
export declare class PostServersIdActionsCreateImage201ApplicationJsonImageProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
export declare enum PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class PostServersIdActionsCreateImage201ApplicationJsonImage extends SpeakeasyBase {
    boundTo: number;
    buildId?: string;
    created: string;
    createdFrom: PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom;
    deleted: string;
    deprecated: string;
    description: string;
    diskSize: number;
    id: number;
    imageSize: number;
    labels: Map<string, string>;
    name: string;
    osFlavor: PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum;
    osVersion: string;
    protection: PostServersIdActionsCreateImage201ApplicationJsonImageProtection;
    rapidDeploy?: boolean;
    status: PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum;
    type: PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum;
}
export declare class PostServersIdActionsCreateImage201ApplicationJson extends SpeakeasyBase {
    action?: PostServersIdActionsCreateImage201ApplicationJsonAction;
    image?: PostServersIdActionsCreateImage201ApplicationJsonImage;
}
export declare class PostServersIdActionsCreateImageRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsCreateImagePathParams;
    request?: PostServersIdActionsCreateImageCreateImageRequest;
}
export declare class PostServersIdActionsCreateImageResponse extends SpeakeasyBase {
    contentType: string;
    postServersIdActionsCreateImage201ApplicationJsonObject?: PostServersIdActionsCreateImage201ApplicationJson;
    statusCode: number;
}
