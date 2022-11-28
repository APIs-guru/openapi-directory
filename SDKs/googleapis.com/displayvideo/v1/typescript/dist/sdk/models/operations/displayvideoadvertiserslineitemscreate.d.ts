import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsCreatePathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersLineItemsCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsCreatePathParams;
    queryParams: DisplayvideoAdvertisersLineItemsCreateQueryParams;
    request?: shared.LineItemInput;
    security: DisplayvideoAdvertisersLineItemsCreateSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsCreateResponse extends SpeakeasyBase {
    contentType: string;
    lineItem?: shared.LineItem;
    statusCode: number;
}
