import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTermStatsUsingGetPathParams extends SpeakeasyBase {
    accId: string;
    filterAccId: string;
}
export declare class GetTermStatsUsingGetRequest extends SpeakeasyBase {
    pathParams: GetTermStatsUsingGetPathParams;
}
export declare class GetTermStatsUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
