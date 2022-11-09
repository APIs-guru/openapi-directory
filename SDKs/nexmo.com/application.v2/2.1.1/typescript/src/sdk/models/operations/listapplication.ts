import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListApplicationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListApplicationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListApplicationQueryParams;
}


export class ListApplicationResponse extends SpeakeasyBase {
  @Metadata()
  applicationResponseCollection?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listApplication400ApplicationJsonAny?: any;

  @Metadata()
  listApplication401ApplicationJsonAny?: any;

  @Metadata()
  listApplication405ApplicationJsonAny?: any;

  @Metadata()
  listApplication406ApplicationJsonAny?: any;
}
