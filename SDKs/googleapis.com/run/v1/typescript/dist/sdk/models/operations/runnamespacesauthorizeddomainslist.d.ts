import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesAuthorizeddomainsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunNamespacesAuthorizeddomainsListQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesAuthorizeddomainsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesAuthorizeddomainsListRequest extends SpeakeasyBase {
    pathParams: RunNamespacesAuthorizeddomainsListPathParams;
    queryParams: RunNamespacesAuthorizeddomainsListQueryParams;
    security: RunNamespacesAuthorizeddomainsListSecurity;
}
export declare class RunNamespacesAuthorizeddomainsListResponse extends SpeakeasyBase {
    contentType: string;
    listAuthorizedDomainsResponse?: shared.ListAuthorizedDomainsResponse;
    statusCode: number;
}
