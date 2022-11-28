import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentShippingsettingsGetsupportedholidaysPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentShippingsettingsGetsupportedholidaysQueryParams extends SpeakeasyBase {
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
export declare class ContentShippingsettingsGetsupportedholidaysSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentShippingsettingsGetsupportedholidaysRequest extends SpeakeasyBase {
    pathParams: ContentShippingsettingsGetsupportedholidaysPathParams;
    queryParams: ContentShippingsettingsGetsupportedholidaysQueryParams;
    security: ContentShippingsettingsGetsupportedholidaysSecurity;
}
export declare class ContentShippingsettingsGetsupportedholidaysResponse extends SpeakeasyBase {
    contentType: string;
    shippingsettingsGetSupportedHolidaysResponse?: shared.ShippingsettingsGetSupportedHolidaysResponse;
    statusCode: number;
}
