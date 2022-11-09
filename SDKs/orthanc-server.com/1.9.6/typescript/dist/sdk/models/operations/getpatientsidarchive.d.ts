import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdArchivePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdArchiveQueryParams extends SpeakeasyBase {
    transcode?: string;
}
export declare class GetPatientsIdArchiveRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdArchivePathParams;
    queryParams: GetPatientsIdArchiveQueryParams;
}
export declare class GetPatientsIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
