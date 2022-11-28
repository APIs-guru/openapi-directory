import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasExportTemplatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ExtrasExportTemplatesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ExportTemplate })
  results: shared.ExportTemplate[];
}


export class ExtrasExportTemplatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExtrasExportTemplatesListQueryParams;
}


export class ExtrasExportTemplatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  extrasExportTemplatesList200ApplicationJsonObject?: ExtrasExportTemplatesList200ApplicationJson;
}
