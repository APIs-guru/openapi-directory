import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExportsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class GetExportsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExportsQueryParams;
}


export class GetExportsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getExports200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
