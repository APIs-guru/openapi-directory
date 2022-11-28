import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AquiferCodesMaterialsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesMaterialsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.AquiferMaterial })
  results: shared.AquiferMaterial[];
}


export class AquiferCodesMaterialsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AquiferCodesMaterialsListQueryParams;
}


export class AquiferCodesMaterialsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  aquiferCodesMaterialsList200ApplicationJsonObject?: AquiferCodesMaterialsList200ApplicationJson;
}
