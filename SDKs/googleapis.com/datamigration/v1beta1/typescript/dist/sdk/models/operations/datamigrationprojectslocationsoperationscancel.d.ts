import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatamigrationProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsOperationsCancelPathParams;
    queryParams: DatamigrationProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: DatamigrationProjectsLocationsOperationsCancelSecurity;
}
export declare class DatamigrationProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
