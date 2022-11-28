import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1CompaniesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  companyInputModel?: shared.CompanyInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  companyInputModel1?: shared.CompanyInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  companyInputModel2?: shared.CompanyInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  companyInputModel3?: shared.CompanyInputModel;
}


export class PostSetupV1CompaniesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1CompaniesRequests;
}


export class PostSetupV1CompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyViewModel?: shared.CompanyViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
