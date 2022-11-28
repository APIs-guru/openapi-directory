import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsrdapDomainGetPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DomainsrdapDomainGetQueryParams extends SpeakeasyBase {
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
export declare class DomainsrdapDomainGetRequest extends SpeakeasyBase {
    pathParams: DomainsrdapDomainGetPathParams;
    queryParams: DomainsrdapDomainGetQueryParams;
}
export declare class DomainsrdapDomainGetResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
