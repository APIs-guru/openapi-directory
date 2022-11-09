import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMapperRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=protocolMapper" })
  protocolMapper?: string;
}
