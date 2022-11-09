import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSnapshotsGetPathParams extends SpeakeasyBase {
    snapshot: string;
}
export declare class PubsubProjectsSnapshotsGetQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSnapshotsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSnapshotsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSnapshotsGetSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSnapshotsGetSecurityOption1;
    option2?: PubsubProjectsSnapshotsGetSecurityOption2;
}
export declare class PubsubProjectsSnapshotsGetRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSnapshotsGetPathParams;
    queryParams: PubsubProjectsSnapshotsGetQueryParams;
    security: PubsubProjectsSnapshotsGetSecurity;
}
export declare class PubsubProjectsSnapshotsGetResponse extends SpeakeasyBase {
    contentType: string;
    snapshot?: shared.Snapshot;
    statusCode: number;
}
