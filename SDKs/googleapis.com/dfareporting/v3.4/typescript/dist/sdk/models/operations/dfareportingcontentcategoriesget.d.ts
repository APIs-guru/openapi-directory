import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingContentCategoriesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingContentCategoriesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingContentCategoriesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingContentCategoriesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingContentCategoriesGetPathParams;
    queryParams: DfareportingContentCategoriesGetQueryParams;
    security: DfareportingContentCategoriesGetSecurity;
}
export declare class DfareportingContentCategoriesGetResponse extends SpeakeasyBase {
    contentCategory?: shared.ContentCategory;
    contentType: string;
    statusCode: number;
}
