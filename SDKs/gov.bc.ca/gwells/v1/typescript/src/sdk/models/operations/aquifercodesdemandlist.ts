import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquiferCodesDemandListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesDemandListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AquiferCodesDemandListQueryParams;
}


export class AquiferCodesDemandList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.AquiferDemand })
  results: shared.AquiferDemand[];
}


export class AquiferCodesDemandListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aquiferCodesDemandList200ApplicationJsonObject?: AquiferCodesDemandList200ApplicationJson;
}
