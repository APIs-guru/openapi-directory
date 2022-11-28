import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsIndexesGetPathParams extends SpeakeasyBase {
    indexId: string;
    projectId: string;
}
export declare class DatastoreProjectsIndexesGetQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsIndexesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsIndexesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsIndexesGetSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsIndexesGetSecurityOption1;
    option2?: DatastoreProjectsIndexesGetSecurityOption2;
}
export declare class DatastoreProjectsIndexesGetRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsIndexesGetPathParams;
    queryParams: DatastoreProjectsIndexesGetQueryParams;
    security: DatastoreProjectsIndexesGetSecurity;
}
export declare class DatastoreProjectsIndexesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleDatastoreAdminV1Index?: shared.GoogleDatastoreAdminV1Index;
    statusCode: number;
}
