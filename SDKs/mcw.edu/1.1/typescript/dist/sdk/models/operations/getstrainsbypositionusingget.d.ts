import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStrainsByPositionUsingGetPathParams extends SpeakeasyBase {
    chr: string;
    mapKey: number;
    start: number;
    stop: number;
}
export declare class GetStrainsByPositionUsingGetRequest extends SpeakeasyBase {
    pathParams: GetStrainsByPositionUsingGetPathParams;
}
export declare class GetStrainsByPositionUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
