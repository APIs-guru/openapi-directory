import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1CompaniesDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyDomainListViewModel?: shared.CompanyDomainListViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
