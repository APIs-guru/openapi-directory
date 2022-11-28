import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetImagesIdPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Information about the Server the Image was created from
**/
export declare class GetImagesId200ApplicationJsonImageCreatedFrom extends SpeakeasyBase {
    id: number;
    name: string;
}
export declare enum GetImagesId200ApplicationJsonImageOsFlavorEnum {
    Ubuntu = "ubuntu",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    Unknown = "unknown"
}
/**
 * Protection configuration for the Resource
**/
export declare class GetImagesId200ApplicationJsonImageProtection extends SpeakeasyBase {
    delete: boolean;
}
export declare enum GetImagesId200ApplicationJsonImageStatusEnum {
    Available = "available",
    Creating = "creating",
    Unavailable = "unavailable"
}
export declare enum GetImagesId200ApplicationJsonImageTypeEnum {
    System = "system",
    App = "app",
    Snapshot = "snapshot",
    Backup = "backup",
    Temporary = "temporary"
}
export declare class GetImagesId200ApplicationJsonImage extends SpeakeasyBase {
    boundTo: number;
    buildId?: string;
    created: string;
    createdFrom: GetImagesId200ApplicationJsonImageCreatedFrom;
    deleted: string;
    deprecated: string;
    description: string;
    diskSize: number;
    id: number;
    imageSize: number;
    labels: Map<string, string>;
    name: string;
    osFlavor: GetImagesId200ApplicationJsonImageOsFlavorEnum;
    osVersion: string;
    protection: GetImagesId200ApplicationJsonImageProtection;
    rapidDeploy?: boolean;
    status: GetImagesId200ApplicationJsonImageStatusEnum;
    type: GetImagesId200ApplicationJsonImageTypeEnum;
}
export declare class GetImagesId200ApplicationJson extends SpeakeasyBase {
    image?: GetImagesId200ApplicationJsonImage;
}
export declare class GetImagesIdRequest extends SpeakeasyBase {
    pathParams: GetImagesIdPathParams;
}
export declare class GetImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    getImagesId200ApplicationJsonObject?: GetImagesId200ApplicationJson;
    statusCode: number;
}
