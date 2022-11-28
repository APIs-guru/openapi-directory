import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksPromoofferGetQueryParams extends SpeakeasyBase {
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
    prettyPrint?: boolean;
    product?: string;
    quotaUser?: string;
    serial?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksPromoofferGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksPromoofferGetRequest extends SpeakeasyBase {
    queryParams: BooksPromoofferGetQueryParams;
    security: BooksPromoofferGetSecurity;
}
export declare class BooksPromoofferGetResponse extends SpeakeasyBase {
    contentType: string;
    offers?: shared.Offers;
    statusCode: number;
}
