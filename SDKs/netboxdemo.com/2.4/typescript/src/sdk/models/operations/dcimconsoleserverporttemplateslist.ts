import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsoleServerPortTemplatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devicetype_id" })
  devicetypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DcimConsoleServerPortTemplatesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ConsoleServerPortTemplate })
  results: shared.ConsoleServerPortTemplate[];
}


export class DcimConsoleServerPortTemplatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimConsoleServerPortTemplatesListQueryParams;
}


export class DcimConsoleServerPortTemplatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimConsoleServerPortTemplatesList200ApplicationJsonObject?: DcimConsoleServerPortTemplatesList200ApplicationJson;
}
