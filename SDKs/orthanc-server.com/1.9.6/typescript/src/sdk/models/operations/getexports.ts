import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class GetExportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetExportsQueryParams;
}


export class GetExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getExports200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
