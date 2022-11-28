import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInsertionOrdersGetPathParams extends SpeakeasyBase {
    advertiserId: string;
    insertionOrderId: string;
}
export declare class DisplayvideoAdvertisersInsertionOrdersGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersInsertionOrdersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInsertionOrdersGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInsertionOrdersGetPathParams;
    queryParams: DisplayvideoAdvertisersInsertionOrdersGetQueryParams;
    security: DisplayvideoAdvertisersInsertionOrdersGetSecurity;
}
export declare class DisplayvideoAdvertisersInsertionOrdersGetResponse extends SpeakeasyBase {
    contentType: string;
    insertionOrder?: shared.InsertionOrder;
    statusCode: number;
}
