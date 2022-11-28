import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileAppsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetProfileAppsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetProfileApps200ApplicationJson extends SpeakeasyBase {
    data?: shared.AuthorizedApp[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetProfileAppsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetProfileAppsRequest extends SpeakeasyBase {
    queryParams: GetProfileAppsQueryParams;
    security: GetProfileAppsSecurity;
}
export declare class GetProfileAppsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getProfileApps200ApplicationJsonObject?: GetProfileApps200ApplicationJson;
    getProfileAppsDefaultApplicationJsonObject?: GetProfileAppsDefaultApplicationJson;
}
