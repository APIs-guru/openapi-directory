import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRealmClientScopesId1ProtocolMappersModelsId2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id1" })
  id1: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id2" })
  id2: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmClientScopesId1ProtocolMappersModelsId2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmClientScopesId1ProtocolMappersModelsId2PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProtocolMapperRepresentation;
}


export class PutRealmClientScopesId1ProtocolMappersModelsId2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
