import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryFiltersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAiring" })
  isAiring?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isKids" })
  isKids?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMovie" })
  isMovie?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isNews" })
  isNews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSeries" })
  isSeries?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSports" })
  isSports?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" })
  recursive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetQueryFiltersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetQueryFiltersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryFiltersQueryParams;

  @SpeakeasyMetadata()
  security: GetQueryFiltersSecurity;
}


export class GetQueryFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  queryFilters?: shared.QueryFilters;

  @SpeakeasyMetadata()
  statusCode: number;
}
