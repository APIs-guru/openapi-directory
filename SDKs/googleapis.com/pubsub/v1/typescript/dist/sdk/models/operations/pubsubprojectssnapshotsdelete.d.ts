import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSnapshotsDeletePathParams extends SpeakeasyBase {
    snapshot: string;
}
export declare class PubsubProjectsSnapshotsDeleteQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSnapshotsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSnapshotsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSnapshotsDeleteSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSnapshotsDeleteSecurityOption1;
    option2?: PubsubProjectsSnapshotsDeleteSecurityOption2;
}
export declare class PubsubProjectsSnapshotsDeleteRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSnapshotsDeletePathParams;
    queryParams: PubsubProjectsSnapshotsDeleteQueryParams;
    security: PubsubProjectsSnapshotsDeleteSecurity;
}
export declare class PubsubProjectsSnapshotsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
