import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ListActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListActionsPathParams;
}


export class ListActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  listActionsResponse?: shared.ListActionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
