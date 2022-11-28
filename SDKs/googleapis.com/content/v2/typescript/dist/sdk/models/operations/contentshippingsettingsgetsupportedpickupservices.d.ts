import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentShippingsettingsGetsupportedpickupservicesPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentShippingsettingsGetsupportedpickupservicesQueryParams extends SpeakeasyBase {
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
export declare class ContentShippingsettingsGetsupportedpickupservicesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentShippingsettingsGetsupportedpickupservicesRequest extends SpeakeasyBase {
    pathParams: ContentShippingsettingsGetsupportedpickupservicesPathParams;
    queryParams: ContentShippingsettingsGetsupportedpickupservicesQueryParams;
    security: ContentShippingsettingsGetsupportedpickupservicesSecurity;
}
export declare class ContentShippingsettingsGetsupportedpickupservicesResponse extends SpeakeasyBase {
    contentType: string;
    shippingsettingsGetSupportedPickupServicesResponse?: shared.ShippingsettingsGetSupportedPickupServicesResponse;
    statusCode: number;
}
