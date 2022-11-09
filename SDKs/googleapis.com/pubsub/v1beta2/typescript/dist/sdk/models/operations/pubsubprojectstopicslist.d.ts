import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class PubsubProjectsTopicsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubProjectsTopicsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsListSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsListSecurityOption1;
    option2?: PubsubProjectsTopicsListSecurityOption2;
}
export declare class PubsubProjectsTopicsListRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsListPathParams;
    queryParams: PubsubProjectsTopicsListQueryParams;
    security: PubsubProjectsTopicsListSecurity;
}
export declare class PubsubProjectsTopicsListResponse extends SpeakeasyBase {
    contentType: string;
    listTopicsResponse?: shared.ListTopicsResponse;
    statusCode: number;
}
