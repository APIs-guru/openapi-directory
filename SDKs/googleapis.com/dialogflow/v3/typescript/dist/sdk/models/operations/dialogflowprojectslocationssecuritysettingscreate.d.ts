import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsSecuritySettingsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsSecuritySettingsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSecuritySettingsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsSecuritySettingsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsSecuritySettingsCreatePathParams;
    queryParams: DialogflowProjectsLocationsSecuritySettingsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3SecuritySettings;
    security: DialogflowProjectsLocationsSecuritySettingsCreateSecurity;
}
export declare class DialogflowProjectsLocationsSecuritySettingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3SecuritySettings?: shared.GoogleCloudDialogflowCxV3SecuritySettings;
    statusCode: number;
}
