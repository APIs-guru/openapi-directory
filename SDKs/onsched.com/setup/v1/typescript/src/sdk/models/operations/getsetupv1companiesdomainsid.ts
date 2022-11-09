import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CompaniesDomainsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CompaniesDomainsIdPathParams;
}


export class GetSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
  @Metadata()
  companyDomainViewModel?: shared.CompanyDomainViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
