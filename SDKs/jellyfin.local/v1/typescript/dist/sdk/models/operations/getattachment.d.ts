import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAttachmentPathParams extends SpeakeasyBase {
    index: number;
    mediaSourceId: string;
    videoId: string;
}
export declare class GetAttachmentRequest extends SpeakeasyBase {
    pathParams: GetAttachmentPathParams;
}
export declare class GetAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    getAttachment200ApplicationOctetStreamBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
