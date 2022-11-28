import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpInfoTypesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    languageCode?: string;
    locationId?: string;
    oauthToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DlpInfoTypesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpInfoTypesListRequest extends SpeakeasyBase {
    queryParams: DlpInfoTypesListQueryParams;
    security: DlpInfoTypesListSecurity;
}
export declare class DlpInfoTypesListResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2ListInfoTypesResponse?: shared.GooglePrivacyDlpV2ListInfoTypesResponse;
    statusCode: number;
}
