import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImagePrivateStatusEnum {
    Creating = "creating",
    PendingUpload = "pending_upload",
    Available = "available"
}
export declare enum ImagePrivateTypeEnum {
    Manual = "manual",
    Automatic = "automatic"
}
/**
 * Private Image object
**/
export declare class ImagePrivate extends SpeakeasyBase {
    created?: Date;
    createdBy?: string;
    deprecated?: boolean;
    description?: string;
    eol?: Date;
    expiry?: Date;
    id?: string;
    isPublic?: boolean;
    label?: string;
    size?: number;
    status?: ImagePrivateStatusEnum;
    type?: ImagePrivateTypeEnum;
    updated?: Date;
    vendor?: string;
}
/**
 * Private Image object
**/
export declare class ImagePrivateInput extends SpeakeasyBase {
    description?: string;
    label?: string;
    status?: ImagePrivateStatusEnum;
}
