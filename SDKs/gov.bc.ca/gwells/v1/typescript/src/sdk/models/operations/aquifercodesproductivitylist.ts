import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquiferCodesProductivityListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesProductivityListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AquiferCodesProductivityListQueryParams;
}


export class AquiferCodesProductivityList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.AquiferProductivity })
  results: shared.AquiferProductivity[];
}


export class AquiferCodesProductivityListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aquiferCodesProductivityList200ApplicationJsonObject?: AquiferCodesProductivityList200ApplicationJson;
}
