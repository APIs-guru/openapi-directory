import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingContentCategoriesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingContentCategoriesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingContentCategoriesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingContentCategoriesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingContentCategoriesUpdatePathParams;
    queryParams: DfareportingContentCategoriesUpdateQueryParams;
    request?: shared.ContentCategory;
    security: DfareportingContentCategoriesUpdateSecurity;
}
export declare class DfareportingContentCategoriesUpdateResponse extends SpeakeasyBase {
    contentCategory?: shared.ContentCategory;
    contentType: string;
    statusCode: number;
}
