import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetXdbsCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetXdbsCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetXdbsCountUsingGetPathParams;
}
export declare class GetXdbsCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
