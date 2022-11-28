import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatafusionProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsOperationsDeletePathParams;
    queryParams: DatafusionProjectsLocationsOperationsDeleteQueryParams;
    security: DatafusionProjectsLocationsOperationsDeleteSecurity;
}
export declare class DatafusionProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
