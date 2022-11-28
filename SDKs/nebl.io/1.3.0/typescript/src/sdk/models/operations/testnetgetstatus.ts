import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestnetGetStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class TestnetGetStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TestnetGetStatusQueryParams;
}


export class TestnetGetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getStatusResponse?: Map<string, any>;
}
