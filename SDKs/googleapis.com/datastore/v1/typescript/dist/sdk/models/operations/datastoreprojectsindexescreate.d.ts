import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsIndexesCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsIndexesCreateQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsIndexesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsIndexesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsIndexesCreateSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsIndexesCreateSecurityOption1;
    option2?: DatastoreProjectsIndexesCreateSecurityOption2;
}
export declare class DatastoreProjectsIndexesCreateRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsIndexesCreatePathParams;
    queryParams: DatastoreProjectsIndexesCreateQueryParams;
    request?: shared.GoogleDatastoreAdminV1IndexInput;
    security: DatastoreProjectsIndexesCreateSecurity;
}
export declare class DatastoreProjectsIndexesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
