import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRetiredObjectCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetRetiredObjectCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetRetiredObjectCountUsingGetPathParams;
}
export declare class GetRetiredObjectCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
