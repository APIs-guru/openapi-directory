import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStrainTypeCountUsingGetPathParams extends SpeakeasyBase {
    dateYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetStrainTypeCountUsingGetRequest extends SpeakeasyBase {
    pathParams: GetStrainTypeCountUsingGetPathParams;
}
export declare class GetStrainTypeCountUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
