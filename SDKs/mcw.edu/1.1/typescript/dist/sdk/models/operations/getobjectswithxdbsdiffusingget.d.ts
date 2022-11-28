import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetObjectsWithXdBsDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    objectKey: number;
    speciesTypeKey: number;
}
export declare class GetObjectsWithXdBsDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectsWithXdBsDiffUsingGetPathParams;
}
export declare class GetObjectsWithXdBsDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
