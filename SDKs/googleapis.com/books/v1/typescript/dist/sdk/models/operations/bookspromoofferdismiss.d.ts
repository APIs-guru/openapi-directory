import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksPromoofferDismissQueryParams extends SpeakeasyBase {
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
}
export declare class BooksPromoofferDismissSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksPromoofferDismissRequest extends SpeakeasyBase {
    queryParams: BooksPromoofferDismissQueryParams;
    security: BooksPromoofferDismissSecurity;
}
export declare class BooksPromoofferDismissResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
