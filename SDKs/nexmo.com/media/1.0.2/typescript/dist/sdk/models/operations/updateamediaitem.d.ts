import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateAMediaItemRequestBody extends SpeakeasyBase {
    description?: string;
    maxDownloadsAllowed?: number;
    metadataPrimary?: string;
    metadataSecondary?: string;
    mimeType?: string;
    public?: boolean;
    title?: string;
}
export declare class UpdateAMediaItemRequest extends SpeakeasyBase {
    request?: UpdateAMediaItemRequestBody;
}
export declare class UpdateAMediaItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
