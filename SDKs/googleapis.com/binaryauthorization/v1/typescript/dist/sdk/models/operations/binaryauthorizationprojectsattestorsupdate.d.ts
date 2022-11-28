import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinaryauthorizationProjectsAttestorsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BinaryauthorizationProjectsAttestorsUpdateQueryParams extends SpeakeasyBase {
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
export declare class BinaryauthorizationProjectsAttestorsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BinaryauthorizationProjectsAttestorsUpdateRequest extends SpeakeasyBase {
    pathParams: BinaryauthorizationProjectsAttestorsUpdatePathParams;
    queryParams: BinaryauthorizationProjectsAttestorsUpdateQueryParams;
    request?: shared.AttestorInput;
    security: BinaryauthorizationProjectsAttestorsUpdateSecurity;
}
export declare class BinaryauthorizationProjectsAttestorsUpdateResponse extends SpeakeasyBase {
    attestor?: shared.Attestor;
    contentType: string;
    statusCode: number;
}
