import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AquiferCodesQualityConcernsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesQualityConcernsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.QualityConcern })
  results: shared.QualityConcern[];
}


export class AquiferCodesQualityConcernsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AquiferCodesQualityConcernsListQueryParams;
}


export class AquiferCodesQualityConcernsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  aquiferCodesQualityConcernsList200ApplicationJsonObject?: AquiferCodesQualityConcernsList200ApplicationJson;
}
