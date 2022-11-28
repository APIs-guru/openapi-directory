import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum DataplexProjectsLocationsOperationsGetViewEnum {
    EntityViewUnspecified = "ENTITY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Schema = "SCHEMA",
    Full = "FULL"
}
export declare class DataplexProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
    view?: DataplexProjectsLocationsOperationsGetViewEnum;
}
export declare class DataplexProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsOperationsGetPathParams;
    queryParams: DataplexProjectsLocationsOperationsGetQueryParams;
    security: DataplexProjectsLocationsOperationsGetSecurity;
}
export declare class DataplexProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
