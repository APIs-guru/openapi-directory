import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGeneTypeDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetGeneTypeDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGeneTypeDiffUsingGetPathParams;
}
export declare class GetGeneTypeDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
