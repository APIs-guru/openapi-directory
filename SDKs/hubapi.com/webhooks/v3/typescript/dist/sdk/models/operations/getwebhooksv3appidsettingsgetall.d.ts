import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhooksV3AppIdSettingsGetAllPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class GetWebhooksV3AppIdSettingsGetAllSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetWebhooksV3AppIdSettingsGetAllRequest extends SpeakeasyBase {
    pathParams: GetWebhooksV3AppIdSettingsGetAllPathParams;
    security: GetWebhooksV3AppIdSettingsGetAllSecurity;
}
export declare class GetWebhooksV3AppIdSettingsGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    settingsResponse?: shared.SettingsResponse;
    statusCode: number;
}
