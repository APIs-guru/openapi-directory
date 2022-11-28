import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogOrganizationsCatalogsSearchPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudprivatecatalogOrganizationsCatalogsSearchQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogOrganizationsCatalogsSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogOrganizationsCatalogsSearchRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogOrganizationsCatalogsSearchPathParams;
    queryParams: CloudprivatecatalogOrganizationsCatalogsSearchQueryParams;
    security: CloudprivatecatalogOrganizationsCatalogsSearchSecurity;
}
export declare class CloudprivatecatalogOrganizationsCatalogsSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
