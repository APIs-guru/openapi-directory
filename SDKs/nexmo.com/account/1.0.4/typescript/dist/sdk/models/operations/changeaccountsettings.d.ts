import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ChangeAccountSettingsServerList: readonly ["https://rest.nexmo.com"];
export declare class ChangeAccountSettingsQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
}
export declare class ChangeAccountSettingsRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ChangeAccountSettingsQueryParams;
    request?: shared.AccountSettingsRequest;
}
export declare class ChangeAccountSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountSettings?: shared.AccountSettings;
}
