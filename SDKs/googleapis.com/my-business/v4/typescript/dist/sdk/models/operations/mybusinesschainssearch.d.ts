import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessChainsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    chainDisplayName?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    resultCount?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessChainsSearchRequest extends SpeakeasyBase {
    queryParams: MybusinessChainsSearchQueryParams;
}
export declare class MybusinessChainsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchChainsResponse?: shared.SearchChainsResponse;
    statusCode: number;
}
