import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MybusinessAccountsLocationsFindMatchesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class MybusinessAccountsLocationsFindMatchesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class MybusinessAccountsLocationsFindMatchesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MybusinessAccountsLocationsFindMatchesPathParams;

  @Metadata()
  queryParams: MybusinessAccountsLocationsFindMatchesQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.FindMatchingLocationsRequest;
}


export class MybusinessAccountsLocationsFindMatchesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  findMatchingLocationsResponse?: shared.FindMatchingLocationsResponse;

  @Metadata()
  statusCode: number;
}
