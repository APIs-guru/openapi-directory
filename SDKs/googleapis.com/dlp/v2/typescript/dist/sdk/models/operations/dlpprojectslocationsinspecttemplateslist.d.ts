import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsInspectTemplatesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsInspectTemplatesListQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsInspectTemplatesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsInspectTemplatesListRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsInspectTemplatesListPathParams;
    queryParams: DlpProjectsLocationsInspectTemplatesListQueryParams;
    security: DlpProjectsLocationsInspectTemplatesListSecurity;
}
export declare class DlpProjectsLocationsInspectTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2ListInspectTemplatesResponse?: shared.GooglePrivacyDlpV2ListInspectTemplatesResponse;
    statusCode: number;
}
