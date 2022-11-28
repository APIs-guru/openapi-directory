import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsPartitionQueryRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams;
    request?: shared.PartitionQueryRequest;
    security: FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsPartitionQueryResponse extends SpeakeasyBase {
    contentType: string;
    partitionQueryResponse?: shared.PartitionQueryResponse;
    statusCode: number;
}
