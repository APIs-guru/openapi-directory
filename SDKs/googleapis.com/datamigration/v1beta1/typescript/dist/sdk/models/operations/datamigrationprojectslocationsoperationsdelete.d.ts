import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatamigrationProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsOperationsDeletePathParams;
    queryParams: DatamigrationProjectsLocationsOperationsDeleteQueryParams;
    security: DatamigrationProjectsLocationsOperationsDeleteSecurity;
}
export declare class DatamigrationProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
