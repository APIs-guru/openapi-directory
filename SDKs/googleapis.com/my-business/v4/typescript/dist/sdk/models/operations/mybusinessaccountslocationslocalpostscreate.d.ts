import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsLocalPostsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsLocalPostsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsLocationsLocalPostsCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsLocalPostsCreatePathParams;
    queryParams: MybusinessAccountsLocationsLocalPostsCreateQueryParams;
    request?: shared.LocalPost;
}
export declare class MybusinessAccountsLocationsLocalPostsCreateResponse extends SpeakeasyBase {
    contentType: string;
    localPost?: shared.LocalPost;
    statusCode: number;
}
