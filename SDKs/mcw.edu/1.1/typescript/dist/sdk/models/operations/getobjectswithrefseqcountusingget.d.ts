import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetObjectsWithRefSeqCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetObjectsWithRefSeqCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectsWithRefSeqCountUsingGetPathParams;
}
export declare class GetObjectsWithRefSeqCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
