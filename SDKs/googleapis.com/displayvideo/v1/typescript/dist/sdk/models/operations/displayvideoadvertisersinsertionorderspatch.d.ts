import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInsertionOrdersPatchPathParams extends SpeakeasyBase {
    advertiserId: string;
    insertionOrderId: string;
}
export declare class DisplayvideoAdvertisersInsertionOrdersPatchQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersInsertionOrdersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInsertionOrdersPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInsertionOrdersPatchPathParams;
    queryParams: DisplayvideoAdvertisersInsertionOrdersPatchQueryParams;
    request?: shared.InsertionOrderInput;
    security: DisplayvideoAdvertisersInsertionOrdersPatchSecurity;
}
export declare class DisplayvideoAdvertisersInsertionOrdersPatchResponse extends SpeakeasyBase {
    contentType: string;
    insertionOrder?: shared.InsertionOrder;
    statusCode: number;
}
