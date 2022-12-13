import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateApplicationAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class CreateApplicationAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateApplicationAgentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AgentCreateRequest;
}


export class CreateApplicationAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentResult?: shared.AgentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
