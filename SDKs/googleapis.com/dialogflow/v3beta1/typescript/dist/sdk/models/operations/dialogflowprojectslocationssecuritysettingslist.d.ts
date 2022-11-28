import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsSecuritySettingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsSecuritySettingsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsSecuritySettingsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSecuritySettingsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSecuritySettingsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsSecuritySettingsListSecurityOption1;
    option2?: DialogflowProjectsLocationsSecuritySettingsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsSecuritySettingsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsSecuritySettingsListPathParams;
    queryParams: DialogflowProjectsLocationsSecuritySettingsListQueryParams;
    security: DialogflowProjectsLocationsSecuritySettingsListSecurity;
}
export declare class DialogflowProjectsLocationsSecuritySettingsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1ListSecuritySettingsResponse?: shared.GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse;
    statusCode: number;
}
