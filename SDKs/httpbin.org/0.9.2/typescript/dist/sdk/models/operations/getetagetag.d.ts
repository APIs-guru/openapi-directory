import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEtagEtagPathParams extends SpeakeasyBase {
    etag: string;
}
export declare class GetEtagEtagHeaders extends SpeakeasyBase {
    ifMatch?: string;
    ifNoneMatch?: string;
}
export declare class GetEtagEtagRequest extends SpeakeasyBase {
    pathParams: GetEtagEtagPathParams;
    headers: GetEtagEtagHeaders;
}
export declare class GetEtagEtagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
