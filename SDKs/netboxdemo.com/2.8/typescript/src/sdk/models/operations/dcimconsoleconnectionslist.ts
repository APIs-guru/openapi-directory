import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleConnectionsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=connection_status" })
  connectionStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=connection_status__n" })
  connectionStatusN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ic" })
  nameIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ie" })
  nameIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__iew" })
  nameIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__isw" })
  nameIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__n" })
  nameN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nic" })
  nameNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nie" })
  nameNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__niew" })
  nameNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nisw" })
  nameNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;
}


export class DcimConsoleConnectionsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimConsoleConnectionsListQueryParams;
}


export class DcimConsoleConnectionsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.ConsolePort })
  results: shared.ConsolePort[];
}


export class DcimConsoleConnectionsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimConsoleConnectionsList200ApplicationJsonObject?: DcimConsoleConnectionsList200ApplicationJson;
}
