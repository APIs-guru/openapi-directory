import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FcmdataProjectsAndroidAppsDeliveryDataListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FcmdataProjectsAndroidAppsDeliveryDataListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FcmdataProjectsAndroidAppsDeliveryDataListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FcmdataProjectsAndroidAppsDeliveryDataListRequest extends SpeakeasyBase {
    pathParams: FcmdataProjectsAndroidAppsDeliveryDataListPathParams;
    queryParams: FcmdataProjectsAndroidAppsDeliveryDataListQueryParams;
    security: FcmdataProjectsAndroidAppsDeliveryDataListSecurity;
}
export declare class FcmdataProjectsAndroidAppsDeliveryDataListResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse?: shared.GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse;
    statusCode: number;
}
