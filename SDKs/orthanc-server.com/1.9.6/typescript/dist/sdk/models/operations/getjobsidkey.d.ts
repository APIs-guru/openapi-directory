import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetJobsIdKeyPathParams extends SpeakeasyBase {
    id: string;
    key: string;
}
export declare class GetJobsIdKeyRequest extends SpeakeasyBase {
    pathParams: GetJobsIdKeyPathParams;
}
export declare class GetJobsIdKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
