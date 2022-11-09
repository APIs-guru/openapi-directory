import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetGeneTypeCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetGeneTypeCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGeneTypeCountUsingGetPathParams;
}
export declare class GetGeneTypeCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
