import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutImagesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PutImagesIdUpdateImageRequestTypeEnum {
    Snapshot = "snapshot"
}
export declare class PutImagesIdUpdateImageRequest extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, any>;
    type?: PutImagesIdUpdateImageRequestTypeEnum;
}
/**
 * Information about the Server the Image was created from
**/
export declare class PutImagesId200ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare enum PutImagesId200ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
**/
export declare class PutImagesId200ApplicationJsonImageProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum PutImagesId200ApplicationJsonImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
export declare enum PutImagesId200ApplicationJsonImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class PutImagesId200ApplicationJsonImage extends SpeakeasyBase {
    boundTo: number;
    buildId?: string;
    created: string;
    createdFrom: PutImagesId200ApplicationJsonImageCreatedFrom;
    deleted: string;
    deprecated: string;
    description: string;
    diskSize: number;
    id: number;
    imageSize: number;
    labels: Map<string, string>;
    name: string;
    osFlavor: PutImagesId200ApplicationJsonImageOsFlavorEnum;
    osVersion: string;
    protection: PutImagesId200ApplicationJsonImageProtection;
    rapidDeploy?: boolean;
    status: PutImagesId200ApplicationJsonImageStatusEnum;
    type: PutImagesId200ApplicationJsonImageTypeEnum;
}
export declare class PutImagesId200ApplicationJson extends SpeakeasyBase {
    image?: PutImagesId200ApplicationJsonImage;
}
export declare class PutImagesIdRequest extends SpeakeasyBase {
    pathParams: PutImagesIdPathParams;
    request?: PutImagesIdUpdateImageRequest;
}
export declare class PutImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    putImagesId200ApplicationJsonObject?: PutImagesId200ApplicationJson;
    statusCode: number;
}
