import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPatientsIdArchivePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostPatientsIdArchiveRequest extends SpeakeasyBase {
    pathParams: PostPatientsIdArchivePathParams;
    request?: any;
}
export declare class PostPatientsIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    postPatientsIdArchive200ApplicationJsonAny?: any;
    statusCode: number;
}
