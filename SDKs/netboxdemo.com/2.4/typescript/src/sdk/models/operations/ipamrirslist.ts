import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamRirsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_private" })
  isPrivate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;
}


export class IpamRirsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IpamRirsListQueryParams;
}


export class IpamRirsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Rir })
  results: shared.Rir[];
}


export class IpamRirsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipamRirsList200ApplicationJsonObject?: IpamRirsList200ApplicationJson;
}
