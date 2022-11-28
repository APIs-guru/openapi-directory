import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImagePublicStatusEnum {
    Creating = "creating",
    PendingUpload = "pending_upload",
    Available = "available"
}
export declare enum ImagePublicTypeEnum {
    Manual = "manual",
    Automatic = "automatic"
}
/**
 * Public Image object
**/
export declare class ImagePublic extends SpeakeasyBase {
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
    status?: ImagePublicStatusEnum;
    type?: ImagePublicTypeEnum;
    updated?: Date;
    vendor?: string;
}
