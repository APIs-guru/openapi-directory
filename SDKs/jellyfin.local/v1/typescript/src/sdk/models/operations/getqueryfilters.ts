import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryFiltersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=isAiring" })
  isAiring?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isKids" })
  isKids?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMovie" })
  isMovie?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isNews" })
  isNews?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isSeries" })
  isSeries?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isSports" })
  isSports?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetQueryFiltersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetQueryFiltersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryFiltersQueryParams;

  @Metadata()
  security: GetQueryFiltersSecurity;
}


export class GetQueryFiltersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  queryFilters?: shared.QueryFilters;

  @Metadata()
  statusCode: number;
}
