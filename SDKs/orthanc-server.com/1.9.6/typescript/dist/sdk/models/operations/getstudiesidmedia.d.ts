import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdMediaQueryParams extends SpeakeasyBase {
    extended?: string;
    transcode?: string;
}
export declare class GetStudiesIdMediaRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdMediaPathParams;
    queryParams: GetStudiesIdMediaQueryParams;
}
export declare class GetStudiesIdMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
