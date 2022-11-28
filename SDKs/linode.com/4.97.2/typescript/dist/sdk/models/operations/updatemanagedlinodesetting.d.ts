import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateManagedLinodeSettingPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class UpdateManagedLinodeSettingSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateManagedLinodeSettingDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateManagedLinodeSettingRequest extends SpeakeasyBase {
    pathParams: UpdateManagedLinodeSettingPathParams;
    request: shared.ManagedLinodeSettingsInput;
    security: UpdateManagedLinodeSettingSecurity;
}
export declare class UpdateManagedLinodeSettingResponse extends SpeakeasyBase {
    contentType: string;
    managedLinodeSettings?: shared.ManagedLinodeSettings;
    statusCode: number;
    updateManagedLinodeSettingDefaultApplicationJsonObject?: UpdateManagedLinodeSettingDefaultApplicationJson;
}
