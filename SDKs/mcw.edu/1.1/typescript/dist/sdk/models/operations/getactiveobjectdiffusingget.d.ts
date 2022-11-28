import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActiveObjectDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetActiveObjectDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetActiveObjectDiffUsingGetPathParams;
}
export declare class GetActiveObjectDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
