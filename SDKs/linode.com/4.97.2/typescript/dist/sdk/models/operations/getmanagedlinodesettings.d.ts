import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedLinodeSettingsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetManagedLinodeSettingsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedLinodeSettings200ApplicationJson extends SpeakeasyBase {
    data?: shared.ManagedLinodeSettings[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetManagedLinodeSettingsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedLinodeSettingsRequest extends SpeakeasyBase {
    queryParams: GetManagedLinodeSettingsQueryParams;
    security: GetManagedLinodeSettingsSecurity;
}
export declare class GetManagedLinodeSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getManagedLinodeSettings200ApplicationJsonObject?: GetManagedLinodeSettings200ApplicationJson;
    getManagedLinodeSettingsDefaultApplicationJsonObject?: GetManagedLinodeSettingsDefaultApplicationJson;
}
