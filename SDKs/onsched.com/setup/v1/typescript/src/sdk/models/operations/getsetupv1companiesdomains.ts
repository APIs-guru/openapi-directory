import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CompaniesDomainsResponse extends SpeakeasyBase {
  @Metadata()
  companyDomainListViewModel?: shared.CompanyDomainListViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
