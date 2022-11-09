import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsSnapshotsListPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubProjectsTopicsSnapshotsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubProjectsTopicsSnapshotsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsSnapshotsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsSnapshotsListSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsSnapshotsListSecurityOption1;
    option2?: PubsubProjectsTopicsSnapshotsListSecurityOption2;
}
export declare class PubsubProjectsTopicsSnapshotsListRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsSnapshotsListPathParams;
    queryParams: PubsubProjectsTopicsSnapshotsListQueryParams;
    security: PubsubProjectsTopicsSnapshotsListSecurity;
}
export declare class PubsubProjectsTopicsSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    listTopicSnapshotsResponse?: shared.ListTopicSnapshotsResponse;
    statusCode: number;
}
