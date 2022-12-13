import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAgentLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class CreateAgentLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAgentLocationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AgentLocationCreateRequest;
}


export class CreateAgentLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentLocationResult?: shared.AgentLocationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
