import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1CompaniesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  companyInputModel?: shared.CompanyInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  companyInputModel1?: shared.CompanyInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  companyInputModel2?: shared.CompanyInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  companyInputModel3?: shared.CompanyInputModel;
}


export class PostSetupV1CompaniesRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1CompaniesRequests;
}


export class PostSetupV1CompaniesResponse extends SpeakeasyBase {
  @Metadata()
  companyViewModel?: shared.CompanyViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
