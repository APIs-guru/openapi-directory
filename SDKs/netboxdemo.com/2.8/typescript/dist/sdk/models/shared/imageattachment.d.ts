import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImageAttachment extends SpeakeasyBase {
    contentType: string;
    created?: Date;
    id?: number;
    image?: string;
    imageHeight: number;
    imageWidth: number;
    name?: string;
    objectId: number;
    parent?: Map<string, string>;
}
export declare class ImageAttachmentInput extends SpeakeasyBase {
    contentType: string;
    imageHeight: number;
    imageWidth: number;
    name?: string;
    objectId: number;
}
