import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsFederationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MetastoreProjectsLocationsFederationsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    federationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MetastoreProjectsLocationsFederationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsFederationsCreateRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsFederationsCreatePathParams;
    queryParams: MetastoreProjectsLocationsFederationsCreateQueryParams;
    request?: shared.Federation;
    security: MetastoreProjectsLocationsFederationsCreateSecurity;
}
export declare class MetastoreProjectsLocationsFederationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
