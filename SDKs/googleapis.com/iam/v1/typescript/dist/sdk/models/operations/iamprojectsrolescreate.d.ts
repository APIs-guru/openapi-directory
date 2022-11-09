import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsRolesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IamProjectsRolesCreateQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsRolesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsRolesCreateRequest extends SpeakeasyBase {
    pathParams: IamProjectsRolesCreatePathParams;
    queryParams: IamProjectsRolesCreateQueryParams;
    request?: shared.CreateRoleRequest;
    security: IamProjectsRolesCreateSecurity;
}
export declare class IamProjectsRolesCreateResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
