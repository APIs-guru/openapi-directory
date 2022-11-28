import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsAdminsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsAdminsCreateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsAdminsCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsAdminsCreatePathParams;
    queryParams: MybusinessAccountsLocationsAdminsCreateQueryParams;
    request?: shared.Admin;
}
export declare class MybusinessAccountsLocationsAdminsCreateResponse extends SpeakeasyBase {
    admin?: shared.Admin;
    contentType: string;
    statusCode: number;
}
