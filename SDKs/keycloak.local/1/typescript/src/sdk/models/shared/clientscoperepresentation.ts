import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";


export class ClientScopeRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=protocolMappers", elemType: shared.ProtocolMapperRepresentation })
  protocolMappers?: ProtocolMapperRepresentation[];
}
