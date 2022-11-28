import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesApplicationsVerifyPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GamesApplicationsVerifyQueryParams extends SpeakeasyBase {
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
export declare class GamesApplicationsVerifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesApplicationsVerifyRequest extends SpeakeasyBase {
    pathParams: GamesApplicationsVerifyPathParams;
    queryParams: GamesApplicationsVerifyQueryParams;
    security: GamesApplicationsVerifySecurity;
}
export declare class GamesApplicationsVerifyResponse extends SpeakeasyBase {
    applicationVerifyResponse?: shared.ApplicationVerifyResponse;
    contentType: string;
    statusCode: number;
}
