import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetGenesByPositionUsingGetPathParams extends SpeakeasyBase {
    chr: string;
    mapKey: number;
    start: number;
    stop: number;
}
export declare class GetGenesByPositionUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGenesByPositionUsingGetPathParams;
}
export declare class GetGenesByPositionUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
