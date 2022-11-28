import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPlatformsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" })
  manufacturerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;
}


export class DcimPlatformsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Platform })
  results: shared.Platform[];
}


export class DcimPlatformsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimPlatformsListQueryParams;
}


export class DcimPlatformsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimPlatformsList200ApplicationJsonObject?: DcimPlatformsList200ApplicationJson;
}
