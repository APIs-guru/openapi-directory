import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersInsertionOrdersCreatePathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersInsertionOrdersCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersInsertionOrdersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersInsertionOrdersCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersInsertionOrdersCreatePathParams;
    queryParams: DisplayvideoAdvertisersInsertionOrdersCreateQueryParams;
    request?: shared.InsertionOrderInput;
    security: DisplayvideoAdvertisersInsertionOrdersCreateSecurity;
}
export declare class DisplayvideoAdvertisersInsertionOrdersCreateResponse extends SpeakeasyBase {
    contentType: string;
    insertionOrder?: shared.InsertionOrder;
    statusCode: number;
}
