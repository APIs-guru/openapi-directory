import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubTopicsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubTopicsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubTopicsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubTopicsListSecurity extends SpeakeasyBase {
    option1?: PubsubTopicsListSecurityOption1;
    option2?: PubsubTopicsListSecurityOption2;
}
export declare class PubsubTopicsListRequest extends SpeakeasyBase {
    queryParams: PubsubTopicsListQueryParams;
    security: PubsubTopicsListSecurity;
}
export declare class PubsubTopicsListResponse extends SpeakeasyBase {
    contentType: string;
    listTopicsResponse?: shared.ListTopicsResponse;
    statusCode: number;
}
