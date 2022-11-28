import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTokenIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokensymbol" })
  tokensymbol: string;
}


export class GetTokenIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTokenIdPathParams;
}


export class GetTokenIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenIdResponse?: shared.GetTokenIdResponse;
}
