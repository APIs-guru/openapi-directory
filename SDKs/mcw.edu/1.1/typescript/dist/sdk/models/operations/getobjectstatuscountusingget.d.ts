import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetObjectStatusCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetObjectStatusCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetObjectStatusCountUsingGetPathParams;
}
export declare class GetObjectStatusCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
