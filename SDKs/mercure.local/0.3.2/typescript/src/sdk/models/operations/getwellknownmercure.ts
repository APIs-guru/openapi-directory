import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWellKnownMercureQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Last-Event-ID" })
  lastEventId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=topic" })
  topic: string[];
}


export class GetWellKnownMercureHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Last-Event-ID" })
  lastEventId?: string;
}


export class GetWellKnownMercureRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWellKnownMercureQueryParams;

  @Metadata()
  headers: GetWellKnownMercureHeaders;
}


export class GetWellKnownMercureResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
