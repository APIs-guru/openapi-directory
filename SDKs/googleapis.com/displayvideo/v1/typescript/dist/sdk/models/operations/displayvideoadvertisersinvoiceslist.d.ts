import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInvoicesListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare enum DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum {
    LoiSapinInvoiceTypeUnspecified = "LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED",
    LoiSapinInvoiceTypeMedia = "LOI_SAPIN_INVOICE_TYPE_MEDIA",
    LoiSapinInvoiceTypePlatform = "LOI_SAPIN_INVOICE_TYPE_PLATFORM"
}
export declare class DisplayvideoAdvertisersInvoicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    issueMonth?: string;
    key?: string;
    loiSapinInvoiceType?: DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersInvoicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInvoicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInvoicesListSecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersInvoicesListSecurityOption1;
    option2?: DisplayvideoAdvertisersInvoicesListSecurityOption2;
}
export declare class DisplayvideoAdvertisersInvoicesListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInvoicesListPathParams;
    queryParams: DisplayvideoAdvertisersInvoicesListQueryParams;
    security: DisplayvideoAdvertisersInvoicesListSecurity;
}
export declare class DisplayvideoAdvertisersInvoicesListResponse extends SpeakeasyBase {
    contentType: string;
    listInvoicesResponse?: shared.ListInvoicesResponse;
    statusCode: number;
}
