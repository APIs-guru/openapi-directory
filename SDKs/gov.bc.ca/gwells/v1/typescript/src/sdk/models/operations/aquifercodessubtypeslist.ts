import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquiferCodesSubtypesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesSubtypesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AquiferCodesSubtypesListQueryParams;
}


export class AquiferCodesSubtypesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.AquiferSubtype })
  results: shared.AquiferSubtype[];
}


export class AquiferCodesSubtypesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aquiferCodesSubtypesList200ApplicationJsonObject?: AquiferCodesSubtypesList200ApplicationJson;
}
