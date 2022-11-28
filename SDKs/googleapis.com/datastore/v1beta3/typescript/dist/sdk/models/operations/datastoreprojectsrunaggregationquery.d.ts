import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsRunAggregationQueryPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsRunAggregationQueryQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsRunAggregationQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsRunAggregationQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsRunAggregationQuerySecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsRunAggregationQuerySecurityOption1;
    option2?: DatastoreProjectsRunAggregationQuerySecurityOption2;
}
export declare class DatastoreProjectsRunAggregationQueryRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsRunAggregationQueryPathParams;
    queryParams: DatastoreProjectsRunAggregationQueryQueryParams;
    request?: shared.RunAggregationQueryRequest;
    security: DatastoreProjectsRunAggregationQuerySecurity;
}
export declare class DatastoreProjectsRunAggregationQueryResponse extends SpeakeasyBase {
    contentType: string;
    runAggregationQueryResponse?: shared.RunAggregationQueryResponse;
    statusCode: number;
}
