import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsPatchPathParams extends SpeakeasyBase {
    advertiserId: string;
    lineItemId: string;
}
export declare class DisplayvideoAdvertisersLineItemsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersLineItemsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsPatchPathParams;
    queryParams: DisplayvideoAdvertisersLineItemsPatchQueryParams;
    request?: shared.LineItemInput;
    security: DisplayvideoAdvertisersLineItemsPatchSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsPatchResponse extends SpeakeasyBase {
    contentType: string;
    lineItem?: shared.LineItem;
    statusCode: number;
}
