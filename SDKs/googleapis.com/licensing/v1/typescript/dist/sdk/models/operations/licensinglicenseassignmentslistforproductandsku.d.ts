import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LicensingLicenseAssignmentsListForProductAndSkuPathParams extends SpeakeasyBase {
    productId: string;
    skuId: string;
}
export declare class LicensingLicenseAssignmentsListForProductAndSkuQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LicensingLicenseAssignmentsListForProductAndSkuSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LicensingLicenseAssignmentsListForProductAndSkuRequest extends SpeakeasyBase {
    pathParams: LicensingLicenseAssignmentsListForProductAndSkuPathParams;
    queryParams: LicensingLicenseAssignmentsListForProductAndSkuQueryParams;
    security: LicensingLicenseAssignmentsListForProductAndSkuSecurity;
}
export declare class LicensingLicenseAssignmentsListForProductAndSkuResponse extends SpeakeasyBase {
    contentType: string;
    licenseAssignmentList?: shared.LicenseAssignmentList;
    statusCode: number;
}
