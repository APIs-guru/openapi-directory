import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestnetGetAddressTotalReceivedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressTotalReceivedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetAddressTotalReceivedPathParams;
}


export class TestnetGetAddressTotalReceivedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressTotalReceivedResponse?: number;
}
