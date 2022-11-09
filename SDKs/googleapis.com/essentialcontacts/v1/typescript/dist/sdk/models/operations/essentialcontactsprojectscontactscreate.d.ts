import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EssentialcontactsProjectsContactsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EssentialcontactsProjectsContactsCreateQueryParams extends SpeakeasyBase {
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
export declare class EssentialcontactsProjectsContactsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EssentialcontactsProjectsContactsCreateRequest extends SpeakeasyBase {
    pathParams: EssentialcontactsProjectsContactsCreatePathParams;
    queryParams: EssentialcontactsProjectsContactsCreateQueryParams;
    request?: shared.GoogleCloudEssentialcontactsV1Contact;
    security: EssentialcontactsProjectsContactsCreateSecurity;
}
export declare class EssentialcontactsProjectsContactsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudEssentialcontactsV1Contact?: shared.GoogleCloudEssentialcontactsV1Contact;
    statusCode: number;
}
