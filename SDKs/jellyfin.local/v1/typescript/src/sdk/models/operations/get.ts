import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeItemTypes" })
  excludeItemTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeArtists" })
  includeArtists?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeGenres" })
  includeGenres?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeMedia" })
  includeMedia?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePeople" })
  includePeople?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeStudios" })
  includeStudios?: boolean;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaTypes" })
  mediaTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryParams;

  @SpeakeasyMetadata()
  security: GetSecurity;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchHintResult?: shared.SearchHintResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
