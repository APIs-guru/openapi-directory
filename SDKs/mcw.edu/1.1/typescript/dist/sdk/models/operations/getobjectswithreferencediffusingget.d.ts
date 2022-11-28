import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetObjectsWithReferenceDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetObjectsWithReferenceDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectsWithReferenceDiffUsingGetPathParams;
}
export declare class GetObjectsWithReferenceDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
