import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsIndexesDeletePathParams extends SpeakeasyBase {
    indexId: string;
    projectId: string;
}
export declare class DatastoreProjectsIndexesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsIndexesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsIndexesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsIndexesDeleteSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsIndexesDeleteSecurityOption1;
    option2?: DatastoreProjectsIndexesDeleteSecurityOption2;
}
export declare class DatastoreProjectsIndexesDeleteRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsIndexesDeletePathParams;
    queryParams: DatastoreProjectsIndexesDeleteQueryParams;
    security: DatastoreProjectsIndexesDeleteSecurity;
}
export declare class DatastoreProjectsIndexesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
