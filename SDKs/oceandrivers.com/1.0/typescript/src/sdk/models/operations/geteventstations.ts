import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEventStationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class GetEventStationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventStationsPathParams;
}


export class GetEventStationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
