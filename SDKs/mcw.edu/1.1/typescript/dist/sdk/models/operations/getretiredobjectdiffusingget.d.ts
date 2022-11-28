import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRetiredObjectDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetRetiredObjectDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetRetiredObjectDiffUsingGetPathParams;
}
export declare class GetRetiredObjectDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
