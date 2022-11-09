import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetMappedSslpByPositionUsingGetPathParams extends SpeakeasyBase {
    chr: string;
    mapKey: number;
    start: number;
    stop: number;
}
export declare class GetMappedSslpByPositionUsingGetRequest extends SpeakeasyBase {
    pathParams: GetMappedSslpByPositionUsingGetPathParams;
}
export declare class GetMappedSslpByPositionUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
