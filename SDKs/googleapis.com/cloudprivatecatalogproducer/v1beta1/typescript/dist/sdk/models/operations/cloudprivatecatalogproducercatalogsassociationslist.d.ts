import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsAssociationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudprivatecatalogproducerCatalogsAssociationsListQueryParams extends SpeakeasyBase {
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
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudprivatecatalogproducerCatalogsAssociationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsAssociationsListRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsAssociationsListPathParams;
    queryParams: CloudprivatecatalogproducerCatalogsAssociationsListQueryParams;
    security: CloudprivatecatalogproducerCatalogsAssociationsListSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsAssociationsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
