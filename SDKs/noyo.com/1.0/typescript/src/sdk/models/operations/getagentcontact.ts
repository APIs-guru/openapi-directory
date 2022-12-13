import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAgentContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contact_id" })
  contactId: string;
}


export class GetAgentContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentContactPathParams;
}


export class GetAgentContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentContactResult?: shared.AgentContactResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
