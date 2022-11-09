import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestnetGetAddressTotalSentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressTotalSentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetAddressTotalSentPathParams;
}


export class TestnetGetAddressTotalSentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressTotalSentResponse?: number;
}
