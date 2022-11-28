import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDisplayPreferencesPathParams extends SpeakeasyBase {
    displayPreferencesId: string;
}
export declare class UpdateDisplayPreferencesQueryParams extends SpeakeasyBase {
    client: string;
    userId: string;
}
export declare class UpdateDisplayPreferencesRequests extends SpeakeasyBase {
    displayPreferencesDto?: shared.DisplayPreferencesDto;
    displayPreferencesDto1?: shared.DisplayPreferencesDto;
    displayPreferencesDto2?: shared.DisplayPreferencesDto;
}
export declare class UpdateDisplayPreferencesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateDisplayPreferencesRequest extends SpeakeasyBase {
    pathParams: UpdateDisplayPreferencesPathParams;
    queryParams: UpdateDisplayPreferencesQueryParams;
    request: UpdateDisplayPreferencesRequests;
    security: UpdateDisplayPreferencesSecurity;
}
export declare class UpdateDisplayPreferencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
