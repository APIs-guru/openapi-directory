import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsViewsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContactcenterinsightsProjectsLocationsViewsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsViewsDeleteRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsViewsDeletePathParams;
    queryParams: ContactcenterinsightsProjectsLocationsViewsDeleteQueryParams;
    security: ContactcenterinsightsProjectsLocationsViewsDeleteSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsViewsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
