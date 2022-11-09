import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTokenHoldersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;
}


export class GetTokenHoldersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTokenHoldersPathParams;
}


export class GetTokenHoldersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenHoldersResponse?: shared.GetTokenHoldersResponse;
}
