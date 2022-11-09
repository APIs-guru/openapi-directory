import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetObjectsWithRefSeqDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetObjectsWithRefSeqDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectsWithRefSeqDiffUsingGetPathParams;
}
export declare class GetObjectsWithRefSeqDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
