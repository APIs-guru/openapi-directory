import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsRolesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum IamProjectsRolesListViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class IamProjectsRolesListQueryParams extends SpeakeasyBase {
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
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
    view?: IamProjectsRolesListViewEnum;
}
export declare class IamProjectsRolesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsRolesListRequest extends SpeakeasyBase {
    pathParams: IamProjectsRolesListPathParams;
    queryParams: IamProjectsRolesListQueryParams;
    security: IamProjectsRolesListSecurity;
}
export declare class IamProjectsRolesListResponse extends SpeakeasyBase {
    contentType: string;
    listRolesResponse?: shared.ListRolesResponse;
    statusCode: number;
}
