import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceBayTemplatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devicetype_id" })
  devicetypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DcimDeviceBayTemplatesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.DeviceBayTemplate })
  results: shared.DeviceBayTemplate[];
}


export class DcimDeviceBayTemplatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimDeviceBayTemplatesListQueryParams;
}


export class DcimDeviceBayTemplatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimDeviceBayTemplatesList200ApplicationJsonObject?: DcimDeviceBayTemplatesList200ApplicationJson;
}
