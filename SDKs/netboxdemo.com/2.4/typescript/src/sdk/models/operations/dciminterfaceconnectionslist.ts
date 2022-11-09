import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfaceConnectionsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=connection_status" })
  connectionStatus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;
}


export class DcimInterfaceConnectionsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimInterfaceConnectionsListQueryParams;
}


export class DcimInterfaceConnectionsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.InterfaceConnection })
  results: shared.InterfaceConnection[];
}


export class DcimInterfaceConnectionsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimInterfaceConnectionsList200ApplicationJsonObject?: DcimInterfaceConnectionsList200ApplicationJson;
}
