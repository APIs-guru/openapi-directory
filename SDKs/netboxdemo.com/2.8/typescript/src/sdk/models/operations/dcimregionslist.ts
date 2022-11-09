import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRegionsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__ic" })
  descriptionIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__ie" })
  descriptionIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__iew" })
  descriptionIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__isw" })
  descriptionIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__n" })
  descriptionN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__nic" })
  descriptionNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__nie" })
  descriptionNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__niew" })
  descriptionNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description__nisw" })
  descriptionNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__gt" })
  idGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__gte" })
  idGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__lt" })
  idLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__lte" })
  idLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__n" })
  idN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ic" })
  nameIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ie" })
  nameIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__iew" })
  nameIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__isw" })
  nameIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__n" })
  nameN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nic" })
  nameNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nie" })
  nameNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__niew" })
  nameNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nisw" })
  nameNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parent__n" })
  parentN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parent_id" })
  parentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parent_id__n" })
  parentIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__ic" })
  slugIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__ie" })
  slugIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__iew" })
  slugIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__isw" })
  slugIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__n" })
  slugN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__nic" })
  slugNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__nie" })
  slugNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__niew" })
  slugNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" })
  slugNisw?: string;
}


export class DcimRegionsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimRegionsListQueryParams;
}


export class DcimRegionsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Region })
  results: shared.Region[];
}


export class DcimRegionsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimRegionsList200ApplicationJsonObject?: DcimRegionsList200ApplicationJson;
}
