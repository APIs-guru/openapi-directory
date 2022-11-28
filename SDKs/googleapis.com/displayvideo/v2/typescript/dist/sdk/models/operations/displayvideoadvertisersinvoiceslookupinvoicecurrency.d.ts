import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    invoiceMonth?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1;
    option2?: DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams;
    queryParams: DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams;
    security: DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse extends SpeakeasyBase {
    contentType: string;
    lookupInvoiceCurrencyResponse?: shared.LookupInvoiceCurrencyResponse;
    statusCode: number;
}
