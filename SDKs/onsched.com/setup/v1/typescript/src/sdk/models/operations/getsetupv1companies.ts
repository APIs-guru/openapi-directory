import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CompaniesResponse extends SpeakeasyBase {
  @Metadata()
  companyViewModel?: shared.CompanyViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
