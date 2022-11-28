import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=containerType" })
  containerType?: string;

  @SpeakeasyMetadata({ data: "json, name=mapperId" })
  mapperId?: string;

  @SpeakeasyMetadata({ data: "json, name=mapperName" })
  mapperName?: string;

  @SpeakeasyMetadata({ data: "json, name=protocolMapper" })
  protocolMapper?: string;
}
