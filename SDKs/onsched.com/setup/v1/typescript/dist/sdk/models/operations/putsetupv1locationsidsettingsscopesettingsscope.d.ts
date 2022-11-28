import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1LocationsIdSettingsScopeSettingsScopePathParams extends SpeakeasyBase {
    id: string;
    settingsScope: string;
}
export declare class PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest extends SpeakeasyBase {
    pathParams: PutSetupV1LocationsIdSettingsScopeSettingsScopePathParams;
}
export declare class PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
