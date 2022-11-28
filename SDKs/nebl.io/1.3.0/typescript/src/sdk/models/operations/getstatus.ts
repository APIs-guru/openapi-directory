import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStatusQueryParams;
}


export class GetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getStatusResponse?: Map<string, any>;
}
