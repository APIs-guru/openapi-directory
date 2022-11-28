import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EssentialcontactsProjectsContactsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class EssentialcontactsProjectsContactsDeleteQueryParams extends SpeakeasyBase {
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
export declare class EssentialcontactsProjectsContactsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EssentialcontactsProjectsContactsDeleteRequest extends SpeakeasyBase {
    pathParams: EssentialcontactsProjectsContactsDeletePathParams;
    queryParams: EssentialcontactsProjectsContactsDeleteQueryParams;
    security: EssentialcontactsProjectsContactsDeleteSecurity;
}
export declare class EssentialcontactsProjectsContactsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
