import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=containerType" })
  containerType?: string;

  @Metadata({ data: "json, name=mapperId" })
  mapperId?: string;

  @Metadata({ data: "json, name=mapperName" })
  mapperName?: string;

  @Metadata({ data: "json, name=protocolMapper" })
  protocolMapper?: string;
}
