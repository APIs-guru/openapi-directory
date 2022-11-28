import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestnetGetAddressTotalSentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressTotalSentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetAddressTotalSentPathParams;
}


export class TestnetGetAddressTotalSentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressTotalSentResponse?: number;
}
