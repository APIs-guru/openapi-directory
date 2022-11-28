import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsGetPathParams extends SpeakeasyBase {
    advertiserId: string;
    lineItemId: string;
}
export declare class DisplayvideoAdvertisersLineItemsGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsGetPathParams;
    queryParams: DisplayvideoAdvertisersLineItemsGetQueryParams;
    security: DisplayvideoAdvertisersLineItemsGetSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsGetResponse extends SpeakeasyBase {
    contentType: string;
    lineItem?: shared.LineItem;
    statusCode: number;
}
