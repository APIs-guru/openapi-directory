import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1CompaniesDomainsRequests extends SpeakeasyBase {
    companyDomainInputModel?: shared.CompanyDomainInputModel;
    companyDomainInputModel1?: shared.CompanyDomainInputModel;
    companyDomainInputModel2?: shared.CompanyDomainInputModel;
    companyDomainInputModel3?: shared.CompanyDomainInputModel;
}
export declare class PostSetupV1CompaniesDomainsRequest extends SpeakeasyBase {
    request?: PostSetupV1CompaniesDomainsRequests;
}
export declare class PostSetupV1CompaniesDomainsResponse extends SpeakeasyBase {
    companyDomainViewModel?: shared.CompanyDomainViewModel;
    contentType: string;
    statusCode: number;
}
