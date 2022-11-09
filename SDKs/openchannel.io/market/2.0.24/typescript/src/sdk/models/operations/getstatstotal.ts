import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatsTotalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetStatsTotalRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStatsTotalQueryParams;
}


export class GetStatsTotalResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
