import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditAgentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AgentEditRequest;
}


export class EditAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentResult?: shared.AgentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
