import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetTokenIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokensymbol" })
  tokensymbol: string;
}


export class TestnetGetTokenIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetTokenIdPathParams;
}


export class TestnetGetTokenIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenIdResponse?: shared.GetTokenIdResponse;
}
