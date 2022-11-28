import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1CompaniesDomainsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1CompaniesDomainsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  companyDomainUpdateModel?: shared.CompanyDomainUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  companyDomainUpdateModel1?: shared.CompanyDomainUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  companyDomainUpdateModel2?: shared.CompanyDomainUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  companyDomainUpdateModel3?: shared.CompanyDomainUpdateModel;
}


export class PutSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1CompaniesDomainsIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1CompaniesDomainsIdRequests;
}


export class PutSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyDomainViewModel?: shared.CompanyDomainViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
