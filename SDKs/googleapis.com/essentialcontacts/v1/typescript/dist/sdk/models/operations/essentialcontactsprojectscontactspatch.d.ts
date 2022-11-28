import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EssentialcontactsProjectsContactsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class EssentialcontactsProjectsContactsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class EssentialcontactsProjectsContactsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EssentialcontactsProjectsContactsPatchRequest extends SpeakeasyBase {
    pathParams: EssentialcontactsProjectsContactsPatchPathParams;
    queryParams: EssentialcontactsProjectsContactsPatchQueryParams;
    request?: shared.GoogleCloudEssentialcontactsV1ContactInput;
    security: EssentialcontactsProjectsContactsPatchSecurity;
}
export declare class EssentialcontactsProjectsContactsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudEssentialcontactsV1Contact?: shared.GoogleCloudEssentialcontactsV1Contact;
    statusCode: number;
}
