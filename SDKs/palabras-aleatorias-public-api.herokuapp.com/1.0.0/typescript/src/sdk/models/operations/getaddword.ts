import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddWordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=definition" })
  definition?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=related" })
  related?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=word" })
  word?: string;
}


export class GetAddWordRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAddWordQueryParams;
}


export class GetAddWordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
