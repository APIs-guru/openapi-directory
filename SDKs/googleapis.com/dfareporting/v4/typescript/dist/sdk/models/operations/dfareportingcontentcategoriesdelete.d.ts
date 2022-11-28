import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingContentCategoriesDeletePathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingContentCategoriesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DfareportingContentCategoriesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingContentCategoriesDeleteRequest extends SpeakeasyBase {
    pathParams: DfareportingContentCategoriesDeletePathParams;
    queryParams: DfareportingContentCategoriesDeleteQueryParams;
    security: DfareportingContentCategoriesDeleteSecurity;
}
export declare class DfareportingContentCategoriesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
