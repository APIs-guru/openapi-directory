import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    keyRingId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCreateSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCreateSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCreateRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCreatePathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCreateQueryParams;
    request?: shared.KeyRing;
    security: CloudkmsProjectsLocationsKeyRingsCreateSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    keyRing?: shared.KeyRing;
    statusCode: number;
}
