import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGenesInRegionUsingGetPathParams extends SpeakeasyBase {
    chr: string;
    mapKey: number;
    start: number;
    stop: number;
}
export declare class GetGenesInRegionUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGenesInRegionUsingGetPathParams;
}
export declare class GetGenesInRegionUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
