import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesSnapshotsGetPathParams extends SpeakeasyBase {
    snapshotId: string;
}
export declare class GamesSnapshotsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesSnapshotsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesSnapshotsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesSnapshotsGetSecurity extends SpeakeasyBase {
    option1?: GamesSnapshotsGetSecurityOption1;
    option2?: GamesSnapshotsGetSecurityOption2;
}
export declare class GamesSnapshotsGetRequest extends SpeakeasyBase {
    pathParams: GamesSnapshotsGetPathParams;
    queryParams: GamesSnapshotsGetQueryParams;
    security: GamesSnapshotsGetSecurity;
}
export declare class GamesSnapshotsGetResponse extends SpeakeasyBase {
    contentType: string;
    snapshot?: shared.Snapshot;
    statusCode: number;
}
