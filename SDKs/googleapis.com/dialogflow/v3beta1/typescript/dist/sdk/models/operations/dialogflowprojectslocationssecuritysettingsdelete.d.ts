import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsSecuritySettingsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsSecuritySettingsDeleteSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption1;
    option2?: DialogflowProjectsLocationsSecuritySettingsDeleteSecurityOption2;
}
export declare class DialogflowProjectsLocationsSecuritySettingsDeleteRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsSecuritySettingsDeletePathParams;
    queryParams: DialogflowProjectsLocationsSecuritySettingsDeleteQueryParams;
    security: DialogflowProjectsLocationsSecuritySettingsDeleteSecurity;
}
export declare class DialogflowProjectsLocationsSecuritySettingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
