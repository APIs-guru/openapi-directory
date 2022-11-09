import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" })
  excludeItemTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeArtists" })
  includeArtists?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeGenres" })
  includeGenres?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeMedia" })
  includeMedia?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includePeople" })
  includePeople?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeStudios" })
  includeStudios?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" })
  mediaTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryParams;

  @Metadata()
  security: GetSecurity;
}


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchHintResult?: shared.SearchHintResult;

  @Metadata()
  statusCode: number;
}
