import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStrainTypeDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetStrainTypeDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetStrainTypeDiffUsingGetPathParams;
}
export declare class GetStrainTypeDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
