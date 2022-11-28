import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    cryptoKeyId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    skipInitialVersionCreation?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams;
    request?: shared.CryptoKeyInput;
    security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    cryptoKey?: shared.CryptoKey;
    statusCode: number;
}
