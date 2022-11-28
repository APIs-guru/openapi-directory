import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationChainsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    chainName?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessbusinessinformationChainsSearchRequest extends SpeakeasyBase {
    queryParams: MybusinessbusinessinformationChainsSearchQueryParams;
}
export declare class MybusinessbusinessinformationChainsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchChainsResponse?: shared.SearchChainsResponse;
    statusCode: number;
}
