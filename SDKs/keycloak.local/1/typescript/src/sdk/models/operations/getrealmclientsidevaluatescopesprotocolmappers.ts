import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdEvaluateScopesProtocolMappersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdEvaluateScopesProtocolMappersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;
}


export class GetRealmClientsIdEvaluateScopesProtocolMappersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdEvaluateScopesProtocolMappersPathParams;

  @Metadata()
  queryParams: GetRealmClientsIdEvaluateScopesProtocolMappersQueryParams;
}


export class GetRealmClientsIdEvaluateScopesProtocolMappersResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation })
  clientScopeEvaluateResourceProtocolMapperEvaluationRepresentations?: shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
