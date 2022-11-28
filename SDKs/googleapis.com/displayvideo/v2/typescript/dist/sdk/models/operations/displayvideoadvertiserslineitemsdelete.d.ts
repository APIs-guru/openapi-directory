import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsDeletePathParams extends SpeakeasyBase {
    advertiserId: string;
    lineItemId: string;
}
export declare class DisplayvideoAdvertisersLineItemsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsDeletePathParams;
    queryParams: DisplayvideoAdvertisersLineItemsDeleteQueryParams;
    security: DisplayvideoAdvertisersLineItemsDeleteSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
