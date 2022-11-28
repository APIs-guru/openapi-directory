import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksSeriesMembershipGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    seriesId: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksSeriesMembershipGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksSeriesMembershipGetRequest extends SpeakeasyBase {
    queryParams: BooksSeriesMembershipGetQueryParams;
    security: BooksSeriesMembershipGetSecurity;
}
export declare class BooksSeriesMembershipGetResponse extends SpeakeasyBase {
    contentType: string;
    seriesmembership?: shared.Seriesmembership;
    statusCode: number;
}
