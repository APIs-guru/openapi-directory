import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetXdbsDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetXdbsDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetXdbsDiffUsingGetPathParams;
}
export declare class GetXdbsDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
