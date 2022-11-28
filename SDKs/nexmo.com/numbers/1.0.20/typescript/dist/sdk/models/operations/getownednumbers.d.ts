import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOwnedNumbersQueryParams extends SpeakeasyBase {
    applicationId?: string;
    country?: string;
    hasApplication?: boolean;
    index?: number;
    pattern?: string;
    searchPattern?: number;
    size?: number;
}
export declare class GetOwnedNumbersRequest extends SpeakeasyBase {
    queryParams: GetOwnedNumbersQueryParams;
}
export declare class GetOwnedNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountUnauthorized?: shared.AccountUnauthorized;
    inboundNumbers?: shared.InboundNumbers;
}
