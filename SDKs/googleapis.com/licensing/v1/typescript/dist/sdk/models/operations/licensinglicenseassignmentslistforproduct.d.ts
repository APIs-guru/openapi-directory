import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicensingLicenseAssignmentsListForProductPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class LicensingLicenseAssignmentsListForProductQueryParams extends SpeakeasyBase {
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
export declare class LicensingLicenseAssignmentsListForProductSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LicensingLicenseAssignmentsListForProductRequest extends SpeakeasyBase {
    pathParams: LicensingLicenseAssignmentsListForProductPathParams;
    queryParams: LicensingLicenseAssignmentsListForProductQueryParams;
    security: LicensingLicenseAssignmentsListForProductSecurity;
}
export declare class LicensingLicenseAssignmentsListForProductResponse extends SpeakeasyBase {
    contentType: string;
    licenseAssignmentList?: shared.LicenseAssignmentList;
    statusCode: number;
}
