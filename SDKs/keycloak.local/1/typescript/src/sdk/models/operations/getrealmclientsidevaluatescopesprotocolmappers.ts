import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsIdEvaluateScopesProtocolMappersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdEvaluateScopesProtocolMappersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;
}


export class GetRealmClientsIdEvaluateScopesProtocolMappersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdEvaluateScopesProtocolMappersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmClientsIdEvaluateScopesProtocolMappersQueryParams;
}


export class GetRealmClientsIdEvaluateScopesProtocolMappersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation })
  clientScopeEvaluateResourceProtocolMapperEvaluationRepresentations?: shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
