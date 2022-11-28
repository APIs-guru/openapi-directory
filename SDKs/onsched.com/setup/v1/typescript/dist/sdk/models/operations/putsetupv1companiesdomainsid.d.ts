import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1CompaniesDomainsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1CompaniesDomainsIdRequests extends SpeakeasyBase {
    companyDomainUpdateModel?: shared.CompanyDomainUpdateModel;
    companyDomainUpdateModel1?: shared.CompanyDomainUpdateModel;
    companyDomainUpdateModel2?: shared.CompanyDomainUpdateModel;
    companyDomainUpdateModel3?: shared.CompanyDomainUpdateModel;
}
export declare class PutSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1CompaniesDomainsIdPathParams;
    request?: PutSetupV1CompaniesDomainsIdRequests;
}
export declare class PutSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
    companyDomainViewModel?: shared.CompanyDomainViewModel;
    contentType: string;
    statusCode: number;
}
