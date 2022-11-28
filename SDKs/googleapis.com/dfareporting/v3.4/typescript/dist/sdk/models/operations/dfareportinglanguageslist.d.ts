import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingLanguagesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingLanguagesListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingLanguagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingLanguagesListRequest extends SpeakeasyBase {
    pathParams: DfareportingLanguagesListPathParams;
    queryParams: DfareportingLanguagesListQueryParams;
    security: DfareportingLanguagesListSecurity;
}
export declare class DfareportingLanguagesListResponse extends SpeakeasyBase {
    contentType: string;
    languagesListResponse?: shared.LanguagesListResponse;
    statusCode: number;
}
