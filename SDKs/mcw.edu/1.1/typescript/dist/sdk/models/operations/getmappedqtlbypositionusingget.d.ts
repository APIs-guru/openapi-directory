import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMappedQtlByPositionUsingGetPathParams extends SpeakeasyBase {
    chr: string;
    mapKey: number;
    start: number;
    stop: number;
}
export declare class GetMappedQtlByPositionUsingGetRequest extends SpeakeasyBase {
    pathParams: GetMappedQtlByPositionUsingGetPathParams;
}
export declare class GetMappedQtlByPositionUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
