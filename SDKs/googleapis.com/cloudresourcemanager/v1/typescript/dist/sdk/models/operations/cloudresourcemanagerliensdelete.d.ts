import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerLiensDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerLiensDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerLiensDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerLiensDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerLiensDeleteSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerLiensDeleteSecurityOption1;
    option2?: CloudresourcemanagerLiensDeleteSecurityOption2;
}
export declare class CloudresourcemanagerLiensDeleteRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerLiensDeletePathParams;
    queryParams: CloudresourcemanagerLiensDeleteQueryParams;
    security: CloudresourcemanagerLiensDeleteSecurity;
}
export declare class CloudresourcemanagerLiensDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
