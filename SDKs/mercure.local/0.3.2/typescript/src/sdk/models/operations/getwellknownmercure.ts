import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWellKnownMercureQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Last-Event-ID" })
  lastEventId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic" })
  topic: string[];
}


export class GetWellKnownMercureHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Last-Event-ID" })
  lastEventId?: string;
}


export class GetWellKnownMercureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWellKnownMercureQueryParams;

  @SpeakeasyMetadata()
  headers: GetWellKnownMercureHeaders;
}


export class GetWellKnownMercureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
