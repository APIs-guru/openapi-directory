import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1CompaniesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  companyUpdateModel?: shared.CompanyUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  companyUpdateModel1?: shared.CompanyUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  companyUpdateModel2?: shared.CompanyUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  companyUpdateModel3?: shared.CompanyUpdateModel;
}


export class PutSetupV1CompaniesRequest extends SpeakeasyBase {
  @Metadata()
  request?: PutSetupV1CompaniesRequests;
}


export class PutSetupV1CompaniesResponse extends SpeakeasyBase {
  @Metadata()
  companyViewModel?: shared.CompanyViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
