import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EssentialcontactsProjectsContactsComputePathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum {
    NotificationCategoryUnspecified = "NOTIFICATION_CATEGORY_UNSPECIFIED",
    All = "ALL",
    Suspension = "SUSPENSION",
    Security = "SECURITY",
    Technical = "TECHNICAL",
    Billing = "BILLING",
    Legal = "LEGAL",
    ProductUpdates = "PRODUCT_UPDATES",
    TechnicalIncidents = "TECHNICAL_INCIDENTS"
}
export declare class EssentialcontactsProjectsContactsComputeQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    notificationCategories?: EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum[];
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class EssentialcontactsProjectsContactsComputeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EssentialcontactsProjectsContactsComputeRequest extends SpeakeasyBase {
    pathParams: EssentialcontactsProjectsContactsComputePathParams;
    queryParams: EssentialcontactsProjectsContactsComputeQueryParams;
    security: EssentialcontactsProjectsContactsComputeSecurity;
}
export declare class EssentialcontactsProjectsContactsComputeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudEssentialcontactsV1ComputeContactsResponse?: shared.GoogleCloudEssentialcontactsV1ComputeContactsResponse;
    statusCode: number;
}
