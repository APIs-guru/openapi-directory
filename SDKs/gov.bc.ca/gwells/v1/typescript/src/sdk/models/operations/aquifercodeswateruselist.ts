import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AquiferCodesWaterUseListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesWaterUseList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.WaterUse })
  results: shared.WaterUse[];
}


export class AquiferCodesWaterUseListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AquiferCodesWaterUseListQueryParams;
}


export class AquiferCodesWaterUseListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  aquiferCodesWaterUseList200ApplicationJsonObject?: AquiferCodesWaterUseList200ApplicationJson;
}
