import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetObjectsWithReferenceCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetObjectsWithReferenceCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectsWithReferenceCountUsingGetPathParams;
}
export declare class GetObjectsWithReferenceCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
