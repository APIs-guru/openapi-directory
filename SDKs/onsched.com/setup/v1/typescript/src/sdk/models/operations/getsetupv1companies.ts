import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1CompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyViewModel?: shared.CompanyViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
