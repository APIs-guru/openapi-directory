import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientScopesIdProtocolMappersProtocolProtocolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=protocol" })
  protocol: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientScopesIdProtocolMappersProtocolProtocolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientScopesIdProtocolMappersProtocolProtocolPathParams;
}


export class GetRealmClientScopesIdProtocolMappersProtocolProtocolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ProtocolMapperRepresentation })
  protocolMapperRepresentations?: shared.ProtocolMapperRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
