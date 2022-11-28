import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CivicinfoDivisionsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CivicinfoDivisionsSearchRequest extends SpeakeasyBase {
    queryParams: CivicinfoDivisionsSearchQueryParams;
}
export declare class CivicinfoDivisionsSearchResponse extends SpeakeasyBase {
    contentType: string;
    divisionSearchResponse?: shared.DivisionSearchResponse;
    statusCode: number;
}
