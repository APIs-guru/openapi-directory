import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdsProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IdsProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class IdsProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdsProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: IdsProjectsLocationsOperationsGetPathParams;
    queryParams: IdsProjectsLocationsOperationsGetQueryParams;
    security: IdsProjectsLocationsOperationsGetSecurity;
}
export declare class IdsProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
