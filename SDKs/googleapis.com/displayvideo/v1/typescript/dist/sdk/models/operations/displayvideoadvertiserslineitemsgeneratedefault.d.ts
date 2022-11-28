import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLineItemsGenerateDefaultPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersLineItemsGenerateDefaultQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLineItemsGenerateDefaultRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLineItemsGenerateDefaultPathParams;
    queryParams: DisplayvideoAdvertisersLineItemsGenerateDefaultQueryParams;
    request?: shared.GenerateDefaultLineItemRequestInput;
    security: DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity;
}
export declare class DisplayvideoAdvertisersLineItemsGenerateDefaultResponse extends SpeakeasyBase {
    contentType: string;
    lineItem?: shared.LineItem;
    statusCode: number;
}
