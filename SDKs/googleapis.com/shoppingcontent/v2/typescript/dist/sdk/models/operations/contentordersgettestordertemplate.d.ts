import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ContentOrdersGettestordertemplateTemplateNameEnum {
    Template1 = "TEMPLATE1",
    Template2 = "TEMPLATE2",
    Template1A = "TEMPLATE1A",
    Template1B = "TEMPLATE1B",
    Template3 = "TEMPLATE3"
}
export declare class ContentOrdersGettestordertemplatePathParams extends SpeakeasyBase {
    merchantId: string;
    templateName: ContentOrdersGettestordertemplateTemplateNameEnum;
}
export declare class ContentOrdersGettestordertemplateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    country?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentOrdersGettestordertemplateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersGettestordertemplateRequest extends SpeakeasyBase {
    pathParams: ContentOrdersGettestordertemplatePathParams;
    queryParams: ContentOrdersGettestordertemplateQueryParams;
    security: ContentOrdersGettestordertemplateSecurity;
}
export declare class ContentOrdersGettestordertemplateResponse extends SpeakeasyBase {
    contentType: string;
    ordersGetTestOrderTemplateResponse?: shared.OrdersGetTestOrderTemplateResponse;
    statusCode: number;
}
