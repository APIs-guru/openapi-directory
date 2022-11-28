import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWebhooksV3AppIdSettingsConfigurePathParams extends SpeakeasyBase {
    appId: number;
}
export declare class PutWebhooksV3AppIdSettingsConfigureSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PutWebhooksV3AppIdSettingsConfigureRequest extends SpeakeasyBase {
    pathParams: PutWebhooksV3AppIdSettingsConfigurePathParams;
    request: shared.SettingsChangeRequest;
    security: PutWebhooksV3AppIdSettingsConfigureSecurity;
}
export declare class PutWebhooksV3AppIdSettingsConfigureResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    settingsResponse?: shared.SettingsResponse;
    statusCode: number;
}
