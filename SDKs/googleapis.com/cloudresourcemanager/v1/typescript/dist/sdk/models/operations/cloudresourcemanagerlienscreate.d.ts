import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerLiensCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerLiensCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerLiensCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerLiensCreateSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerLiensCreateSecurityOption1;
    option2?: CloudresourcemanagerLiensCreateSecurityOption2;
}
export declare class CloudresourcemanagerLiensCreateRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerLiensCreateQueryParams;
    request?: shared.Lien;
    security: CloudresourcemanagerLiensCreateSecurity;
}
export declare class CloudresourcemanagerLiensCreateResponse extends SpeakeasyBase {
    contentType: string;
    lien?: shared.Lien;
    statusCode: number;
}
