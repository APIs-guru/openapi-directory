import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetObjectStatusDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetObjectStatusDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectStatusDiffUsingGetPathParams;
}
export declare class GetObjectStatusDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
