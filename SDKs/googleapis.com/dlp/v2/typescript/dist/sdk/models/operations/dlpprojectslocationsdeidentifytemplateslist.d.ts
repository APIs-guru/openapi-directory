import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsDeidentifyTemplatesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsDeidentifyTemplatesListQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsDeidentifyTemplatesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsDeidentifyTemplatesListRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsDeidentifyTemplatesListPathParams;
    queryParams: DlpProjectsLocationsDeidentifyTemplatesListQueryParams;
    security: DlpProjectsLocationsDeidentifyTemplatesListSecurity;
}
export declare class DlpProjectsLocationsDeidentifyTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2ListDeidentifyTemplatesResponse?: shared.GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;
    statusCode: number;
}
