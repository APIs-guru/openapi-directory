import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatsTotalQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetStatsTotalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStatsTotalQueryParams;
}


export class GetStatsTotalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
