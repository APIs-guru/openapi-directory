import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1CompaniesDomainsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1CompaniesDomainsIdPathParams;
}


export class DeleteSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
  @Metadata()
  companyDomainViewModel?: shared.CompanyDomainViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
