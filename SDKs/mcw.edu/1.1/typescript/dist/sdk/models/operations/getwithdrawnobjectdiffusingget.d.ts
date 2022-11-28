import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWithdrawnObjectDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetWithdrawnObjectDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetWithdrawnObjectDiffUsingGetPathParams;
}
export declare class GetWithdrawnObjectDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
