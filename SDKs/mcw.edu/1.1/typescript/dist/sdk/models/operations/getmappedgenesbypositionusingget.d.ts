import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetMappedGenesByPositionUsingGetPathParams extends SpeakeasyBase {
    chr: string;
    mapKey: number;
    start: number;
    stop: number;
}
export declare class GetMappedGenesByPositionUsingGetRequest extends SpeakeasyBase {
    pathParams: GetMappedGenesByPositionUsingGetPathParams;
}
export declare class GetMappedGenesByPositionUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
