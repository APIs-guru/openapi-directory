import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedLinodeSettingPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetManagedLinodeSettingSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedLinodeSettingDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedLinodeSettingRequest extends SpeakeasyBase {
    pathParams: GetManagedLinodeSettingPathParams;
    security: GetManagedLinodeSettingSecurity;
}
export declare class GetManagedLinodeSettingResponse extends SpeakeasyBase {
    contentType: string;
    managedLinodeSettings?: shared.ManagedLinodeSettings;
    statusCode: number;
    getManagedLinodeSettingDefaultApplicationJsonObject?: GetManagedLinodeSettingDefaultApplicationJson;
}
