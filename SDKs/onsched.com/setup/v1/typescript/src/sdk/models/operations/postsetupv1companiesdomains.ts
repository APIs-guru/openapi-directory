import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1CompaniesDomainsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  companyDomainInputModel?: shared.CompanyDomainInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  companyDomainInputModel1?: shared.CompanyDomainInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  companyDomainInputModel2?: shared.CompanyDomainInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  companyDomainInputModel3?: shared.CompanyDomainInputModel;
}


export class PostSetupV1CompaniesDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1CompaniesDomainsRequests;
}


export class PostSetupV1CompaniesDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyDomainViewModel?: shared.CompanyDomainViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
