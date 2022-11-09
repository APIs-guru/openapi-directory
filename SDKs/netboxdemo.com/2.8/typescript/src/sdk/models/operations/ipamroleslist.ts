import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamRolesListQueryParams extends SpeakeasyBase {
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


export class IpamRolesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IpamRolesListQueryParams;
}


export class IpamRolesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Role })
  results: shared.Role[];
}


export class IpamRolesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipamRolesList200ApplicationJsonObject?: IpamRolesList200ApplicationJson;
}
