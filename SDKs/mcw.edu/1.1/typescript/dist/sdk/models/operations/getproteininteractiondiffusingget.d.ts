import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProteinInteractionDiffUsingGetPathParams extends SpeakeasyBase {
    dateFromYyyymmdd: string;
    dateToYyyymmdd: string;
    speciesTypeKey: number;
}
export declare class GetProteinInteractionDiffUsingGetRequest extends SpeakeasyBase {
    pathParams: GetProteinInteractionDiffUsingGetPathParams;
}
export declare class GetProteinInteractionDiffUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
