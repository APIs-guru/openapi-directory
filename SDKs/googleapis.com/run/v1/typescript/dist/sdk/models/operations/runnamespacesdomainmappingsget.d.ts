import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesDomainmappingsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesDomainmappingsGetQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesDomainmappingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesDomainmappingsGetRequest extends SpeakeasyBase {
    pathParams: RunNamespacesDomainmappingsGetPathParams;
    queryParams: RunNamespacesDomainmappingsGetQueryParams;
    security: RunNamespacesDomainmappingsGetSecurity;
}
export declare class RunNamespacesDomainmappingsGetResponse extends SpeakeasyBase {
    contentType: string;
    domainMapping?: shared.DomainMapping;
    statusCode: number;
}
