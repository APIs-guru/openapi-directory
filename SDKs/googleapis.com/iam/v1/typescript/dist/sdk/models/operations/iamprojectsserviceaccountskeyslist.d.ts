import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsKeysListPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum IamProjectsServiceAccountsKeysListKeyTypesEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED",
    UserManaged = "USER_MANAGED",
    SystemManaged = "SYSTEM_MANAGED"
}
export declare class IamProjectsServiceAccountsKeysListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    keyTypes?: IamProjectsServiceAccountsKeysListKeyTypesEnum[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamProjectsServiceAccountsKeysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsKeysListRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsKeysListPathParams;
    queryParams: IamProjectsServiceAccountsKeysListQueryParams;
    security: IamProjectsServiceAccountsKeysListSecurity;
}
export declare class IamProjectsServiceAccountsKeysListResponse extends SpeakeasyBase {
    contentType: string;
    listServiceAccountKeysResponse?: shared.ListServiceAccountKeysResponse;
    statusCode: number;
}
