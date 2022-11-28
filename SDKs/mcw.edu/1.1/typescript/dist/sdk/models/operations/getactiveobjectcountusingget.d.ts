import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActiveObjectCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetActiveObjectCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetActiveObjectCountUsingGetPathParams;
}
export declare class GetActiveObjectCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
