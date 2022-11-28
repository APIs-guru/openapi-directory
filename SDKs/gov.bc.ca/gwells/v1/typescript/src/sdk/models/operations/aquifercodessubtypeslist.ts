import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AquiferCodesSubtypesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesSubtypesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.AquiferSubtype })
  results: shared.AquiferSubtype[];
}


export class AquiferCodesSubtypesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AquiferCodesSubtypesListQueryParams;
}


export class AquiferCodesSubtypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  aquiferCodesSubtypesList200ApplicationJsonObject?: AquiferCodesSubtypesList200ApplicationJson;
}
