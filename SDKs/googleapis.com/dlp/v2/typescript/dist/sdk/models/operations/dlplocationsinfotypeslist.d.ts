import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpLocationsInfoTypesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpLocationsInfoTypesListQueryParams extends SpeakeasyBase {
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
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DlpLocationsInfoTypesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpLocationsInfoTypesListRequest extends SpeakeasyBase {
    pathParams: DlpLocationsInfoTypesListPathParams;
    queryParams: DlpLocationsInfoTypesListQueryParams;
    security: DlpLocationsInfoTypesListSecurity;
}
export declare class DlpLocationsInfoTypesListResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2ListInfoTypesResponse?: shared.GooglePrivacyDlpV2ListInfoTypesResponse;
    statusCode: number;
}
