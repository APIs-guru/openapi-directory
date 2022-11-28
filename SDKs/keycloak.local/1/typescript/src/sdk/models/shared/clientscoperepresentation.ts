import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";



export class ClientScopeRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=protocolMappers", elemType: ProtocolMapperRepresentation })
  protocolMappers?: ProtocolMapperRepresentation[];
}
