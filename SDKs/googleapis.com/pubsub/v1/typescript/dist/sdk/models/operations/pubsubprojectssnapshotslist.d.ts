import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSnapshotsListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class PubsubProjectsSnapshotsListQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSnapshotsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSnapshotsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSnapshotsListSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSnapshotsListSecurityOption1;
    option2?: PubsubProjectsSnapshotsListSecurityOption2;
}
export declare class PubsubProjectsSnapshotsListRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSnapshotsListPathParams;
    queryParams: PubsubProjectsSnapshotsListQueryParams;
    security: PubsubProjectsSnapshotsListSecurity;
}
export declare class PubsubProjectsSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    listSnapshotsResponse?: shared.ListSnapshotsResponse;
    statusCode: number;
}
