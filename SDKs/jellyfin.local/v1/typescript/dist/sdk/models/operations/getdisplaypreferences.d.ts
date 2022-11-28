import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDisplayPreferencesPathParams extends SpeakeasyBase {
    displayPreferencesId: string;
}
export declare class GetDisplayPreferencesQueryParams extends SpeakeasyBase {
    client: string;
    userId: string;
}
export declare class GetDisplayPreferencesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDisplayPreferencesRequest extends SpeakeasyBase {
    pathParams: GetDisplayPreferencesPathParams;
    queryParams: GetDisplayPreferencesQueryParams;
    security: GetDisplayPreferencesSecurity;
}
export declare class GetDisplayPreferencesResponse extends SpeakeasyBase {
    contentType: string;
    displayPreferencesDto?: shared.DisplayPreferencesDto;
    statusCode: number;
}
