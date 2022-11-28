import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesSnapshotsListPathParams extends SpeakeasyBase {
    playerId: string;
}
export declare class GamesSnapshotsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesSnapshotsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesSnapshotsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesSnapshotsListSecurity extends SpeakeasyBase {
    option1?: GamesSnapshotsListSecurityOption1;
    option2?: GamesSnapshotsListSecurityOption2;
}
export declare class GamesSnapshotsListRequest extends SpeakeasyBase {
    pathParams: GamesSnapshotsListPathParams;
    queryParams: GamesSnapshotsListQueryParams;
    security: GamesSnapshotsListSecurity;
}
export declare class GamesSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    snapshotListResponse?: shared.SnapshotListResponse;
    statusCode: number;
}
