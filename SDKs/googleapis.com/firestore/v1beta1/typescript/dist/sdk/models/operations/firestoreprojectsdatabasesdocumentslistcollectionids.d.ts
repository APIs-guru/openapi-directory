import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsListCollectionIdsRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsListCollectionIdsPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsListCollectionIdsQueryParams;
    request?: shared.ListCollectionIdsRequest;
    security: FirestoreProjectsDatabasesDocumentsListCollectionIdsSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsListCollectionIdsResponse extends SpeakeasyBase {
    contentType: string;
    listCollectionIdsResponse?: shared.ListCollectionIdsResponse;
    statusCode: number;
}
