import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerGetTenancyAgreementReportPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetTenancyAgreementReportQueryParams extends SpeakeasyBase {
    tenancyId: string;
    token: string;
}
export declare class LandlordControllerGetTenancyAgreementReportRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetTenancyAgreementReportPathParams;
    queryParams: LandlordControllerGetTenancyAgreementReportQueryParams;
}
export declare class LandlordControllerGetTenancyAgreementReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
