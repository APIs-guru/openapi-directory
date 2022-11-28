import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesNetworksDefineCertificatePathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesNetworksDefineCertificateQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesNetworksDefineCertificateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesNetworksDefineCertificatePathParams;
    queryParams: ChromepolicyCustomersPoliciesNetworksDefineCertificateQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1DefineCertificateRequest;
    security: ChromepolicyCustomersPoliciesNetworksDefineCertificateSecurity;
}
export declare class ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1DefineCertificateResponse?: shared.GoogleChromePolicyVersionsV1DefineCertificateResponse;
    statusCode: number;
}
