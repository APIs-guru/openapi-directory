import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    IdentitySourceNotFound = "IDENTITY_SOURCE_NOT_FOUND",
    IdentitySourceMisconfigured = "IDENTITY_SOURCE_MISCONFIGURED",
    TooManyMappingsFound = "TOO_MANY_MAPPINGS_FOUND",
    InternalError = "INTERNAL_ERROR"
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    resolutionStatusCode?: CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListSecurity extends SpeakeasyBase {
    option1?: CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1;
    option2?: CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2;
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListRequest extends SpeakeasyBase {
    pathParams: CloudsearchDebugIdentitysourcesUnmappedidsListPathParams;
    queryParams: CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams;
    security: CloudsearchDebugIdentitysourcesUnmappedidsListSecurity;
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListResponse extends SpeakeasyBase {
    contentType: string;
    listUnmappedIdentitiesResponse?: shared.ListUnmappedIdentitiesResponse;
    statusCode: number;
}
