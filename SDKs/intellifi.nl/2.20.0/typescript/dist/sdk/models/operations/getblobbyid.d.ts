import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBlobByIdPathParams extends SpeakeasyBase {
    filename: string;
    id: string;
}
export declare class GetBlobByIdRequest extends SpeakeasyBase {
    pathParams: GetBlobByIdPathParams;
}
export declare class GetBlobByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBlobById200ImageWildcardBinaryString?: Uint8Array;
}
