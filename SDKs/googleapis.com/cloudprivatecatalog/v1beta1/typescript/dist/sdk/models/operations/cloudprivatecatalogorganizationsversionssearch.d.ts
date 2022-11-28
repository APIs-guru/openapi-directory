import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogOrganizationsVersionsSearchPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudprivatecatalogOrganizationsVersionsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudprivatecatalogOrganizationsVersionsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogOrganizationsVersionsSearchRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogOrganizationsVersionsSearchPathParams;
    queryParams: CloudprivatecatalogOrganizationsVersionsSearchQueryParams;
    security: CloudprivatecatalogOrganizationsVersionsSearchSecurity;
}
export declare class CloudprivatecatalogOrganizationsVersionsSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
