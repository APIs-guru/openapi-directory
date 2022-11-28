import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1BusinessusersEmailCompaniesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=email" })
  email: string;
}


export class GetSetupV1BusinessusersEmailCompaniesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchText" })
  searchText?: string;
}


export class GetSetupV1BusinessusersEmailCompaniesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1BusinessusersEmailCompaniesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1BusinessusersEmailCompaniesQueryParams;
}


export class GetSetupV1BusinessusersEmailCompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorizedCompanyListViewModel?: shared.AuthorizedCompanyListViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
