import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditAgentContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contact_id" })
  contactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditAgentContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditAgentContactPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AgentContactEditRequest;
}


export class EditAgentContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentContactResult?: shared.AgentContactResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
