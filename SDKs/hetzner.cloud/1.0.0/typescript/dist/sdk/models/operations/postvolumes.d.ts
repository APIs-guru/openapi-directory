import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostVolumesCreateVolumeRequest extends SpeakeasyBase {
    automount?: boolean;
    format?: string;
    labels?: Map<string, any>;
    location?: string;
    name: string;
    server?: number;
    size: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostVolumes201ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostVolumes201ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostVolumes201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumes201ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: PostVolumes201ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostVolumes201ApplicationJsonActionResources[];
    started: string;
    status: PostVolumes201ApplicationJsonActionStatusEnum;
}
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
export declare class PostVolumes201ApplicationJsonVolumeLocation extends SpeakeasyBase {
    city: string;
    country: string;
    description: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    networkZone: string;
}
/**
 * Protection configuration for the Resource
**/
export declare class PostVolumes201ApplicationJsonVolumeProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum PostVolumes201ApplicationJsonVolumeStatusEnum {
    Creating = "creating",
    Available = "available"
}
export declare class PostVolumes201ApplicationJsonVolume extends SpeakeasyBase {
    created: string;
    format: string;
    id: number;
    labels: Map<string, string>;
    linuxDevice: string;
    location: PostVolumes201ApplicationJsonVolumeLocation;
    name: string;
    protection: PostVolumes201ApplicationJsonVolumeProtection;
    server: number;
    size: number;
    status: PostVolumes201ApplicationJsonVolumeStatusEnum;
}
export declare class PostVolumes201ApplicationJson extends SpeakeasyBase {
    action: PostVolumes201ApplicationJsonAction;
    nextActions: PostVolumes201ApplicationJsonAction[];
    volume: PostVolumes201ApplicationJsonVolume;
}
export declare class PostVolumesRequest extends SpeakeasyBase {
    request?: PostVolumesCreateVolumeRequest;
}
export declare class PostVolumesResponse extends SpeakeasyBase {
    contentType: string;
    postVolumes201ApplicationJsonObject?: PostVolumes201ApplicationJson;
    statusCode: number;
}
