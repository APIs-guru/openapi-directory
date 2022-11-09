import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CHANGEACCOUNTSETTINGS_SERVERS: string[];
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
