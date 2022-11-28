import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LifesciencesProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LifesciencesProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class LifesciencesProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LifesciencesProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: LifesciencesProjectsLocationsOperationsGetPathParams;
    queryParams: LifesciencesProjectsLocationsOperationsGetQueryParams;
    security: LifesciencesProjectsLocationsOperationsGetSecurity;
}
export declare class LifesciencesProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
