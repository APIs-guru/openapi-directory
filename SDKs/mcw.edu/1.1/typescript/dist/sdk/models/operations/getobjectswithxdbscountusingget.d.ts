import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetObjectsWithXdBsCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    objectKey: number;
    speciesTypeKey: number;
}
export declare class GetObjectsWithXdBsCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectsWithXdBsCountUsingGetPathParams;
}
export declare class GetObjectsWithXdBsCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
