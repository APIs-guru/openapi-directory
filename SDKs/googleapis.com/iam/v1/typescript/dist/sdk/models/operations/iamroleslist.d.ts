import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum IamRolesListViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class IamRolesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
    view?: IamRolesListViewEnum;
}
export declare class IamRolesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamRolesListRequest extends SpeakeasyBase {
    queryParams: IamRolesListQueryParams;
    security: IamRolesListSecurity;
}
export declare class IamRolesListResponse extends SpeakeasyBase {
    contentType: string;
    listRolesResponse?: shared.ListRolesResponse;
    statusCode: number;
}
