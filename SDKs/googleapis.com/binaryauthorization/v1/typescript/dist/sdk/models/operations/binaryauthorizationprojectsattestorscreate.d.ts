import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinaryauthorizationProjectsAttestorsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BinaryauthorizationProjectsAttestorsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    attestorId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BinaryauthorizationProjectsAttestorsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BinaryauthorizationProjectsAttestorsCreateRequest extends SpeakeasyBase {
    pathParams: BinaryauthorizationProjectsAttestorsCreatePathParams;
    queryParams: BinaryauthorizationProjectsAttestorsCreateQueryParams;
    request?: shared.AttestorInput;
    security: BinaryauthorizationProjectsAttestorsCreateSecurity;
}
export declare class BinaryauthorizationProjectsAttestorsCreateResponse extends SpeakeasyBase {
    attestor?: shared.Attestor;
    contentType: string;
    statusCode: number;
}
