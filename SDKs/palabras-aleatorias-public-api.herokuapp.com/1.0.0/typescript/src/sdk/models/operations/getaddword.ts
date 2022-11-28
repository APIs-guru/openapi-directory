import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddWordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=definition" })
  definition?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=related" })
  related?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=word" })
  word?: string;
}


export class GetAddWordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAddWordQueryParams;
}


export class GetAddWordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
