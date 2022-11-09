import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfaceTemplatesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devicetype_id" })
  devicetypeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=form_factor" })
  formFactor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mgmt_only" })
  mgmtOnly?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DcimInterfaceTemplatesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimInterfaceTemplatesListQueryParams;
}


export class DcimInterfaceTemplatesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.InterfaceTemplate })
  results: shared.InterfaceTemplate[];
}


export class DcimInterfaceTemplatesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimInterfaceTemplatesList200ApplicationJsonObject?: DcimInterfaceTemplatesList200ApplicationJson;
}
