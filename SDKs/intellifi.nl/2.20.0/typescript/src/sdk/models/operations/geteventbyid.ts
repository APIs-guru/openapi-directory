import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEventByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventByIdPathParams;
}


export class GetEventByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  event?: shared.Event;

  @SpeakeasyMetadata()
  statusCode: number;
}
