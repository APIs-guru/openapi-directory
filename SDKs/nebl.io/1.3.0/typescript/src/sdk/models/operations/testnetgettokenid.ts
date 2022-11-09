import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetTokenIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokensymbol" })
  tokensymbol: string;
}


export class TestnetGetTokenIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetTokenIdPathParams;
}


export class TestnetGetTokenIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenIdResponse?: shared.GetTokenIdResponse;
}
