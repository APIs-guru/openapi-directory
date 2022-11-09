import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionHelpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=actionId" })
  actionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ActionHelpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionHelpPathParams;
}


export class ActionHelpResponse extends SpeakeasyBase {
  @Metadata()
  actionHelpResponse?: shared.ActionHelpResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
