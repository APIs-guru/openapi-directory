import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditAgentLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditAgentLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditAgentLocationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AgentLocationEditRequest;
}


export class EditAgentLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentLocationResult?: shared.AgentLocationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
