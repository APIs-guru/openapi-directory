import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestnetGetAddressTotalReceivedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressTotalReceivedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetAddressTotalReceivedPathParams;
}


export class TestnetGetAddressTotalReceivedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressTotalReceivedResponse?: number;
}
