import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhooksV3AppIdSettingsClearPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class DeleteWebhooksV3AppIdSettingsClearSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class DeleteWebhooksV3AppIdSettingsClearRequest extends SpeakeasyBase {
    pathParams: DeleteWebhooksV3AppIdSettingsClearPathParams;
    security: DeleteWebhooksV3AppIdSettingsClearSecurity;
}
export declare class DeleteWebhooksV3AppIdSettingsClearResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
