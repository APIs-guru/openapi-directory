import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SpeechProjectsLocationsCustomClassesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpeechProjectsLocationsCustomClassesCreateQueryParams extends SpeakeasyBase {
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
export declare class SpeechProjectsLocationsCustomClassesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpeechProjectsLocationsCustomClassesCreateRequest extends SpeakeasyBase {
    pathParams: SpeechProjectsLocationsCustomClassesCreatePathParams;
    queryParams: SpeechProjectsLocationsCustomClassesCreateQueryParams;
    request?: shared.CreateCustomClassRequest;
    security: SpeechProjectsLocationsCustomClassesCreateSecurity;
}
export declare class SpeechProjectsLocationsCustomClassesCreateResponse extends SpeakeasyBase {
    contentType: string;
    customClass?: shared.CustomClass;
    statusCode: number;
}
