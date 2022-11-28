import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentShippingsettingsGetsupportedcarriersPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentShippingsettingsGetsupportedcarriersQueryParams extends SpeakeasyBase {
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
export declare class ContentShippingsettingsGetsupportedcarriersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentShippingsettingsGetsupportedcarriersRequest extends SpeakeasyBase {
    pathParams: ContentShippingsettingsGetsupportedcarriersPathParams;
    queryParams: ContentShippingsettingsGetsupportedcarriersQueryParams;
    security: ContentShippingsettingsGetsupportedcarriersSecurity;
}
export declare class ContentShippingsettingsGetsupportedcarriersResponse extends SpeakeasyBase {
    contentType: string;
    shippingsettingsGetSupportedCarriersResponse?: shared.ShippingsettingsGetSupportedCarriersResponse;
    statusCode: number;
}
