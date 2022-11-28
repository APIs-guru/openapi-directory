import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInterfaceTemplatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devicetype_id" })
  devicetypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_factor" })
  formFactor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mgmt_only" })
  mgmtOnly?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DcimInterfaceTemplatesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.InterfaceTemplate })
  results: shared.InterfaceTemplate[];
}


export class DcimInterfaceTemplatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimInterfaceTemplatesListQueryParams;
}


export class DcimInterfaceTemplatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimInterfaceTemplatesList200ApplicationJsonObject?: DcimInterfaceTemplatesList200ApplicationJson;
}
