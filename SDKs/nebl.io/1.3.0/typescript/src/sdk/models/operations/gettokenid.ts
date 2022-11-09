import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTokenIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokensymbol" })
  tokensymbol: string;
}


export class GetTokenIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTokenIdPathParams;
}


export class GetTokenIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenIdResponse?: shared.GetTokenIdResponse;
}
