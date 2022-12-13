import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAgentLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class GetAgentLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentLocationPathParams;
}


export class GetAgentLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentLocationResult?: shared.AgentLocationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
