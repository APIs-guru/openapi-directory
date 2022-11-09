import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquiferCodesMaterialsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesMaterialsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AquiferCodesMaterialsListQueryParams;
}


export class AquiferCodesMaterialsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.AquiferMaterial })
  results: shared.AquiferMaterial[];
}


export class AquiferCodesMaterialsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aquiferCodesMaterialsList200ApplicationJsonObject?: AquiferCodesMaterialsList200ApplicationJson;
}
