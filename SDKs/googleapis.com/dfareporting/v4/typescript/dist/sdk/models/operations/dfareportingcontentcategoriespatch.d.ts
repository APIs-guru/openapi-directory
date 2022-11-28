import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingContentCategoriesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingContentCategoriesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingContentCategoriesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingContentCategoriesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingContentCategoriesPatchPathParams;
    queryParams: DfareportingContentCategoriesPatchQueryParams;
    request?: shared.ContentCategory;
    security: DfareportingContentCategoriesPatchSecurity;
}
export declare class DfareportingContentCategoriesPatchResponse extends SpeakeasyBase {
    contentCategory?: shared.ContentCategory;
    contentType: string;
    statusCode: number;
}
