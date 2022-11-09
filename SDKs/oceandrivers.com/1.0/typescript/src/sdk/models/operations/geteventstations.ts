import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEventStationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class GetEventStationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventStationsPathParams;
}


export class GetEventStationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
