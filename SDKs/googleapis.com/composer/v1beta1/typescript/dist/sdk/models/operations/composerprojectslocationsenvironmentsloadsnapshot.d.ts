import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams extends SpeakeasyBase {
    environment: string;
}
export declare class ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams extends SpeakeasyBase {
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
export declare class ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ComposerProjectsLocationsEnvironmentsLoadSnapshotRequest extends SpeakeasyBase {
    pathParams: ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams;
    queryParams: ComposerProjectsLocationsEnvironmentsLoadSnapshotQueryParams;
    request?: shared.LoadSnapshotRequest;
    security: ComposerProjectsLocationsEnvironmentsLoadSnapshotSecurity;
}
export declare class ComposerProjectsLocationsEnvironmentsLoadSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
