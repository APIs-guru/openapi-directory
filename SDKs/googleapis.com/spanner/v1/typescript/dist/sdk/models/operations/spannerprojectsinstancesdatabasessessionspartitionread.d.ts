import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionReadRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsPartitionReadPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsPartitionReadQueryParams;
    request?: shared.PartitionReadRequest;
    security: SpannerProjectsInstancesDatabasesSessionsPartitionReadSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsPartitionReadResponse extends SpeakeasyBase {
    contentType: string;
    partitionResponse?: shared.PartitionResponse;
    statusCode: number;
}
