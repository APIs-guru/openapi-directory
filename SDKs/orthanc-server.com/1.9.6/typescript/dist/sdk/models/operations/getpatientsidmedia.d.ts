import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdMediaQueryParams extends SpeakeasyBase {
    extended?: string;
    transcode?: string;
}
export declare class GetPatientsIdMediaRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdMediaPathParams;
    queryParams: GetPatientsIdMediaQueryParams;
}
export declare class GetPatientsIdMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
