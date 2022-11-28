import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionQueryRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsPartitionQueryPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsPartitionQueryQueryParams;
    request?: shared.PartitionQueryRequest;
    security: SpannerProjectsInstancesDatabasesSessionsPartitionQuerySecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionQueryResponse extends SpeakeasyBase {
    contentType: string;
    partitionResponse?: shared.PartitionResponse;
    statusCode: number;
}
