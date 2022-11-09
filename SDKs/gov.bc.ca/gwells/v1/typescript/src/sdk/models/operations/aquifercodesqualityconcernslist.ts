import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AquiferCodesQualityConcernsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AquiferCodesQualityConcernsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AquiferCodesQualityConcernsListQueryParams;
}


export class AquiferCodesQualityConcernsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.QualityConcern })
  results: shared.QualityConcern[];
}


export class AquiferCodesQualityConcernsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aquiferCodesQualityConcernsList200ApplicationJsonObject?: AquiferCodesQualityConcernsList200ApplicationJson;
}
