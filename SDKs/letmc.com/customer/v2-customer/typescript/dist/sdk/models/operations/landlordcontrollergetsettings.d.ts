import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LandlordControllerGetSettingsPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetSettingsQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class LandlordControllerGetSettingsRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetSettingsPathParams;
    queryParams: LandlordControllerGetSettingsQueryParams;
}
export declare class LandlordControllerGetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    landlordSettingsModel?: shared.LandlordSettingsModel;
    statusCode: number;
}
