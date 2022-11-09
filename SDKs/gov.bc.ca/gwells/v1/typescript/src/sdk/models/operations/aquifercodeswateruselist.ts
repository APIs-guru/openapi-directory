import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquiferCodesWaterUseListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesWaterUseListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AquiferCodesWaterUseListQueryParams;
}


export class AquiferCodesWaterUseList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.WaterUse })
  results: shared.WaterUse[];
}


export class AquiferCodesWaterUseListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aquiferCodesWaterUseList200ApplicationJsonObject?: AquiferCodesWaterUseList200ApplicationJson;
}
