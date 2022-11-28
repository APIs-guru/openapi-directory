import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoUsersBulkEditAssignedUserRolesPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DisplayvideoUsersBulkEditAssignedUserRolesQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoUsersBulkEditAssignedUserRolesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoUsersBulkEditAssignedUserRolesRequest extends SpeakeasyBase {
    pathParams: DisplayvideoUsersBulkEditAssignedUserRolesPathParams;
    queryParams: DisplayvideoUsersBulkEditAssignedUserRolesQueryParams;
    request?: shared.BulkEditAssignedUserRolesRequestInput;
    security: DisplayvideoUsersBulkEditAssignedUserRolesSecurity;
}
export declare class DisplayvideoUsersBulkEditAssignedUserRolesResponse extends SpeakeasyBase {
    bulkEditAssignedUserRolesResponse?: shared.BulkEditAssignedUserRolesResponse;
    contentType: string;
    statusCode: number;
}
