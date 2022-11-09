import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1CompaniesDomainsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  companyDomainInputModel?: shared.CompanyDomainInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  companyDomainInputModel1?: shared.CompanyDomainInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  companyDomainInputModel2?: shared.CompanyDomainInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  companyDomainInputModel3?: shared.CompanyDomainInputModel;
}


export class PostSetupV1CompaniesDomainsRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1CompaniesDomainsRequests;
}


export class PostSetupV1CompaniesDomainsResponse extends SpeakeasyBase {
  @Metadata()
  companyDomainViewModel?: shared.CompanyDomainViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
