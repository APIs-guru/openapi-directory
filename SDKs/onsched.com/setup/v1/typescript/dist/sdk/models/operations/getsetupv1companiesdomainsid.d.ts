import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1CompaniesDomainsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CompaniesDomainsIdPathParams;
}
export declare class GetSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
    companyDomainViewModel?: shared.CompanyDomainViewModel;
    contentType: string;
    statusCode: number;
}
