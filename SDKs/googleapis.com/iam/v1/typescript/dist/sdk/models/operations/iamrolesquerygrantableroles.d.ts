import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamRolesQueryGrantableRolesQueryParams extends SpeakeasyBase {
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
export declare class IamRolesQueryGrantableRolesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamRolesQueryGrantableRolesRequest extends SpeakeasyBase {
    queryParams: IamRolesQueryGrantableRolesQueryParams;
    request?: shared.QueryGrantableRolesRequest;
    security: IamRolesQueryGrantableRolesSecurity;
}
export declare class IamRolesQueryGrantableRolesResponse extends SpeakeasyBase {
    contentType: string;
    queryGrantableRolesResponse?: shared.QueryGrantableRolesResponse;
    statusCode: number;
}
