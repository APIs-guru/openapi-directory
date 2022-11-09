import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenPathParams;

  @Metadata()
  queryParams: GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryParams;
}


export class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  accessToken?: shared.AccessToken;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
