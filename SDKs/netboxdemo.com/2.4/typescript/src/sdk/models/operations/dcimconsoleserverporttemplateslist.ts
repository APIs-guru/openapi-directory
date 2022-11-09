import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortTemplatesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devicetype_id" })
  devicetypeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DcimConsoleServerPortTemplatesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimConsoleServerPortTemplatesListQueryParams;
}


export class DcimConsoleServerPortTemplatesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.ConsoleServerPortTemplate })
  results: shared.ConsoleServerPortTemplate[];
}


export class DcimConsoleServerPortTemplatesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimConsoleServerPortTemplatesList200ApplicationJsonObject?: DcimConsoleServerPortTemplatesList200ApplicationJson;
}
