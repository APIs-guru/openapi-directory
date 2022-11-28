import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsUndeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudprivatecatalogproducerCatalogsUndeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsUndeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsUndeleteRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsUndeletePathParams;
    queryParams: CloudprivatecatalogproducerCatalogsUndeleteQueryParams;
    request?: Map<string, any>;
    security: CloudprivatecatalogproducerCatalogsUndeleteSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsUndeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
