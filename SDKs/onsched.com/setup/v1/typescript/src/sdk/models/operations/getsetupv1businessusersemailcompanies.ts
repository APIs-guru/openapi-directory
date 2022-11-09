import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1BusinessusersEmailCompaniesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=email" })
  email: string;
}


export class GetSetupV1BusinessusersEmailCompaniesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchText" })
  searchText?: string;
}


export class GetSetupV1BusinessusersEmailCompaniesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1BusinessusersEmailCompaniesPathParams;

  @Metadata()
  queryParams: GetSetupV1BusinessusersEmailCompaniesQueryParams;
}


export class GetSetupV1BusinessusersEmailCompaniesResponse extends SpeakeasyBase {
  @Metadata()
  authorizedCompanyListViewModel?: shared.AuthorizedCompanyListViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
