import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EssentialcontactsProjectsContactsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class EssentialcontactsProjectsContactsGetQueryParams extends SpeakeasyBase {
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
export declare class EssentialcontactsProjectsContactsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EssentialcontactsProjectsContactsGetRequest extends SpeakeasyBase {
    pathParams: EssentialcontactsProjectsContactsGetPathParams;
    queryParams: EssentialcontactsProjectsContactsGetQueryParams;
    security: EssentialcontactsProjectsContactsGetSecurity;
}
export declare class EssentialcontactsProjectsContactsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudEssentialcontactsV1Contact?: shared.GoogleCloudEssentialcontactsV1Contact;
    statusCode: number;
}
