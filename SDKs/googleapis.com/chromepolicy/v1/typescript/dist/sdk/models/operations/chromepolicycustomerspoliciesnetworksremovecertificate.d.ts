import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromepolicyCustomersPoliciesNetworksRemoveCertificatePathParams extends SpeakeasyBase {
    customer: string;
}
export declare class ChromepolicyCustomersPoliciesNetworksRemoveCertificateQueryParams extends SpeakeasyBase {
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
export declare class ChromepolicyCustomersPoliciesNetworksRemoveCertificateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest extends SpeakeasyBase {
    pathParams: ChromepolicyCustomersPoliciesNetworksRemoveCertificatePathParams;
    queryParams: ChromepolicyCustomersPoliciesNetworksRemoveCertificateQueryParams;
    request?: shared.GoogleChromePolicyVersionsV1RemoveCertificateRequest;
    security: ChromepolicyCustomersPoliciesNetworksRemoveCertificateSecurity;
}
export declare class ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse extends SpeakeasyBase {
    contentType: string;
    googleChromePolicyVersionsV1RemoveCertificateResponse?: Map<string, any>;
    statusCode: number;
}
