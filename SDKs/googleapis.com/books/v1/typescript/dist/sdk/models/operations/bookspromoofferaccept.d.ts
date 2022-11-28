import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksPromoofferAcceptQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    androidId?: string;
    callback?: string;
    device?: string;
    fields?: string;
    key?: string;
    manufacturer?: string;
    model?: string;
    oauthToken?: string;
    offerId?: string;
    prettyPrint?: boolean;
    product?: string;
    quotaUser?: string;
    serial?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId?: string;
}
export declare class BooksPromoofferAcceptSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksPromoofferAcceptRequest extends SpeakeasyBase {
    queryParams: BooksPromoofferAcceptQueryParams;
    security: BooksPromoofferAcceptSecurity;
}
export declare class BooksPromoofferAcceptResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
