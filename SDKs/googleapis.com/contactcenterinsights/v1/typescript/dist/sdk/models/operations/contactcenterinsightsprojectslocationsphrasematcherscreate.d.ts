import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersCreateQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsPhraseMatchersCreatePathParams;
    queryParams: ContactcenterinsightsProjectsLocationsPhraseMatchersCreateQueryParams;
    request?: shared.GoogleCloudContactcenterinsightsV1PhraseMatcherInput;
    security: ContactcenterinsightsProjectsLocationsPhraseMatchersCreateSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1PhraseMatcher?: shared.GoogleCloudContactcenterinsightsV1PhraseMatcher;
    statusCode: number;
}
