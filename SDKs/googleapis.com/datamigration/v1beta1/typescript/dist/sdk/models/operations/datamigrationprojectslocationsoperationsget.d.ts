import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatamigrationProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsOperationsGetPathParams;
    queryParams: DatamigrationProjectsLocationsOperationsGetQueryParams;
    security: DatamigrationProjectsLocationsOperationsGetSecurity;
}
export declare class DatamigrationProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
