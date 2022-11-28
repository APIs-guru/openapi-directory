import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesVersionsPopulateFilesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesVersionsPopulateFilesQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingSitesVersionsPopulateFilesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsPopulateFilesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsPopulateFilesSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesVersionsPopulateFilesSecurityOption1;
    option2?: FirebasehostingSitesVersionsPopulateFilesSecurityOption2;
}
export declare class FirebasehostingSitesVersionsPopulateFilesRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesVersionsPopulateFilesPathParams;
    queryParams: FirebasehostingSitesVersionsPopulateFilesQueryParams;
    request?: shared.PopulateVersionFilesRequest;
    security: FirebasehostingSitesVersionsPopulateFilesSecurity;
}
export declare class FirebasehostingSitesVersionsPopulateFilesResponse extends SpeakeasyBase {
    contentType: string;
    populateVersionFilesResponse?: shared.PopulateVersionFilesResponse;
    statusCode: number;
}
