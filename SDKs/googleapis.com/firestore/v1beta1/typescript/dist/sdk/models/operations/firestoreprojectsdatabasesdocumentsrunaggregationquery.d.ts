import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams;
    request?: shared.RunAggregationQueryRequest;
    security: FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse extends SpeakeasyBase {
    contentType: string;
    runAggregationQueryResponse?: shared.RunAggregationQueryResponse;
    statusCode: number;
}
