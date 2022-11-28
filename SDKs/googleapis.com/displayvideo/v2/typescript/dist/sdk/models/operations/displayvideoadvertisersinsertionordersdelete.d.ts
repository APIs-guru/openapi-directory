import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInsertionOrdersDeletePathParams extends SpeakeasyBase {
    advertiserId: string;
    insertionOrderId: string;
}
export declare class DisplayvideoAdvertisersInsertionOrdersDeleteQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersInsertionOrdersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInsertionOrdersDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInsertionOrdersDeletePathParams;
    queryParams: DisplayvideoAdvertisersInsertionOrdersDeleteQueryParams;
    security: DisplayvideoAdvertisersInsertionOrdersDeleteSecurity;
}
export declare class DisplayvideoAdvertisersInsertionOrdersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
