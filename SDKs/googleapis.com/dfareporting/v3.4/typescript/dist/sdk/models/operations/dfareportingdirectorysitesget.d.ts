import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingDirectorySitesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingDirectorySitesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingDirectorySitesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingDirectorySitesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingDirectorySitesGetPathParams;
    queryParams: DfareportingDirectorySitesGetQueryParams;
    security: DfareportingDirectorySitesGetSecurity;
}
export declare class DfareportingDirectorySitesGetResponse extends SpeakeasyBase {
    contentType: string;
    directorySite?: shared.DirectorySite;
    statusCode: number;
}
