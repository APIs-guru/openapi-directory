import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1SettingsQueryParams extends SpeakeasyBase {
    locationId?: string;
}
export declare class GetConsumerV1SettingsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1SettingsQueryParams;
}
export declare class GetConsumerV1SettingsResponse extends SpeakeasyBase {
    contentType: string;
    onlineSettingsViewModel?: shared.OnlineSettingsViewModel;
    statusCode: number;
}
