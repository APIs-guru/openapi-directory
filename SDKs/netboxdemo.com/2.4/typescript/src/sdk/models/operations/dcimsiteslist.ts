import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimSitesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asn" })
  asn?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contact_email" })
  contactEmail?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contact_name" })
  contactName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contact_phone" })
  contactPhone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facility" })
  facility?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;
}


export class DcimSitesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimSitesListQueryParams;
}


export class DcimSitesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Site })
  results: shared.Site[];
}


export class DcimSitesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimSitesList200ApplicationJsonObject?: DcimSitesList200ApplicationJson;
}
