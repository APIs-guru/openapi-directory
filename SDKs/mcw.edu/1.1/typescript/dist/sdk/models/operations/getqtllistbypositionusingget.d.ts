import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQtlListByPositionUsingGetPathParams extends SpeakeasyBase {
    chr: string;
    mapKey: number;
    start: number;
    stop: number;
}
export declare class GetQtlListByPositionUsingGetRequest extends SpeakeasyBase {
    pathParams: GetQtlListByPositionUsingGetPathParams;
}
export declare class GetQtlListByPositionUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
