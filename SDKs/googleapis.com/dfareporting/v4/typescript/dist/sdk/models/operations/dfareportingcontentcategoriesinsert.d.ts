import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingContentCategoriesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingContentCategoriesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingContentCategoriesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingContentCategoriesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingContentCategoriesInsertPathParams;
    queryParams: DfareportingContentCategoriesInsertQueryParams;
    request?: shared.ContentCategory;
    security: DfareportingContentCategoriesInsertSecurity;
}
export declare class DfareportingContentCategoriesInsertResponse extends SpeakeasyBase {
    contentCategory?: shared.ContentCategory;
    contentType: string;
    statusCode: number;
}
