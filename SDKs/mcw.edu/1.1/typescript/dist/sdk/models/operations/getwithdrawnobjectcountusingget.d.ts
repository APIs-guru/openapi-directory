import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWithdrawnObjectCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetWithdrawnObjectCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetWithdrawnObjectCountUsingGetPathParams;
}
export declare class GetWithdrawnObjectCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
