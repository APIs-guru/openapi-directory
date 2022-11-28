import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSetupV1CompaniesDomainsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1CompaniesDomainsIdPathParams;
}


export class DeleteSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyDomainViewModel?: shared.CompanyDomainViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
