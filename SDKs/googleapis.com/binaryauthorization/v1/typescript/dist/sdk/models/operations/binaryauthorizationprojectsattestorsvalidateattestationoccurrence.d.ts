import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams extends SpeakeasyBase {
    attestor: string;
}
export declare class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams extends SpeakeasyBase {
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
export declare class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest extends SpeakeasyBase {
    pathParams: BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams;
    queryParams: BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams;
    request?: shared.ValidateAttestationOccurrenceRequest;
    security: BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity;
}
export declare class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validateAttestationOccurrenceResponse?: shared.ValidateAttestationOccurrenceResponse;
}
