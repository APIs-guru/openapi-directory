import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionHelpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionId" })
  actionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ActionHelpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionHelpPathParams;
}


export class ActionHelpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionHelpResponse?: shared.ActionHelpResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
