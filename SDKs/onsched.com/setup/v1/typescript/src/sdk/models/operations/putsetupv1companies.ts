import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1CompaniesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  companyUpdateModel?: shared.CompanyUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  companyUpdateModel1?: shared.CompanyUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  companyUpdateModel2?: shared.CompanyUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  companyUpdateModel3?: shared.CompanyUpdateModel;
}


export class PutSetupV1CompaniesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PutSetupV1CompaniesRequests;
}


export class PutSetupV1CompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyViewModel?: shared.CompanyViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
