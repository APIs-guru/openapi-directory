import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class KgsearchEntitiesSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    indent?: boolean;
    key?: string;
    languages?: string[];
    limit?: number;
    oauthToken?: string;
    prefix?: boolean;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    types?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class KgsearchEntitiesSearchRequest extends SpeakeasyBase {
    queryParams: KgsearchEntitiesSearchQueryParams;
}
export declare class KgsearchEntitiesSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
