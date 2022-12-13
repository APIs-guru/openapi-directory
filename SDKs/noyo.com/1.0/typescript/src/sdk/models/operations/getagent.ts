import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class GetAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentPathParams;
}


export class GetAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentResult?: shared.AgentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
