import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAgentContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class CreateAgentContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAgentContactPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AgentContactCreateRequest;
}


export class CreateAgentContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentContactResult?: shared.AgentContactResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
