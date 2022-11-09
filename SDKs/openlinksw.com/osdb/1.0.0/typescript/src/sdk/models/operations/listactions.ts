import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ListActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListActionsPathParams;
}


export class ListActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  listActionsResponse?: shared.ListActionsResponse;

  @Metadata()
  statusCode: number;
}
