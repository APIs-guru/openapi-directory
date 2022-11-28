import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostStudiesIdArchivePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostStudiesIdArchiveRequest extends SpeakeasyBase {
    pathParams: PostStudiesIdArchivePathParams;
    request?: any;
}
export declare class PostStudiesIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    postStudiesIdArchive200ApplicationJsonAny?: any;
    statusCode: number;
}
