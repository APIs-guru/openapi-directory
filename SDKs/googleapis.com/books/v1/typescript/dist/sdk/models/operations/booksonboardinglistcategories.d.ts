import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksOnboardingListCategoriesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksOnboardingListCategoriesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksOnboardingListCategoriesRequest extends SpeakeasyBase {
    queryParams: BooksOnboardingListCategoriesQueryParams;
    security: BooksOnboardingListCategoriesSecurity;
}
export declare class BooksOnboardingListCategoriesResponse extends SpeakeasyBase {
    category?: shared.Category;
    contentType: string;
    statusCode: number;
}
