import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsSecuritySettingsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsSecuritySettingsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsSecuritySettingsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSecuritySettingsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSecuritySettingsPatchSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsSecuritySettingsPatchSecurityOption1;
    option2?: DialogflowProjectsLocationsSecuritySettingsPatchSecurityOption2;
}
export declare class DialogflowProjectsLocationsSecuritySettingsPatchRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsSecuritySettingsPatchPathParams;
    queryParams: DialogflowProjectsLocationsSecuritySettingsPatchQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1SecuritySettings;
    security: DialogflowProjectsLocationsSecuritySettingsPatchSecurity;
}
export declare class DialogflowProjectsLocationsSecuritySettingsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1SecuritySettings?: shared.GoogleCloudDialogflowCxV3beta1SecuritySettings;
    statusCode: number;
}
