import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenQueryParams;
}


export class GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessToken?: shared.AccessToken;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
