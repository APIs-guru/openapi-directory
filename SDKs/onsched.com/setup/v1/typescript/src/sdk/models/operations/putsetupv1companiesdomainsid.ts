import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1CompaniesDomainsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CompaniesDomainsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  companyDomainUpdateModel?: shared.CompanyDomainUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  companyDomainUpdateModel1?: shared.CompanyDomainUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  companyDomainUpdateModel2?: shared.CompanyDomainUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  companyDomainUpdateModel3?: shared.CompanyDomainUpdateModel;
}


export class PutSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1CompaniesDomainsIdPathParams;

  @Metadata()
  request?: PutSetupV1CompaniesDomainsIdRequests;
}


export class PutSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
  @Metadata()
  companyDomainViewModel?: shared.CompanyDomainViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
