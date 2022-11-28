import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AquiferCodesProductivityListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesProductivityList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.AquiferProductivity })
  results: shared.AquiferProductivity[];
}


export class AquiferCodesProductivityListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AquiferCodesProductivityListQueryParams;
}


export class AquiferCodesProductivityListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  aquiferCodesProductivityList200ApplicationJsonObject?: AquiferCodesProductivityList200ApplicationJson;
}
