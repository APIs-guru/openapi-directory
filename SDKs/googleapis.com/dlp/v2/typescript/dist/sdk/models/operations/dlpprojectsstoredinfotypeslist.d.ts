import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsStoredInfoTypesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsStoredInfoTypesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locationId?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DlpProjectsStoredInfoTypesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsStoredInfoTypesListRequest extends SpeakeasyBase {
    pathParams: DlpProjectsStoredInfoTypesListPathParams;
    queryParams: DlpProjectsStoredInfoTypesListQueryParams;
    security: DlpProjectsStoredInfoTypesListSecurity;
}
export declare class DlpProjectsStoredInfoTypesListResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2ListStoredInfoTypesResponse?: shared.GooglePrivacyDlpV2ListStoredInfoTypesResponse;
    statusCode: number;
}
