import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetTokenHoldersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;
}


export class TestnetGetTokenHoldersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetTokenHoldersPathParams;
}


export class TestnetGetTokenHoldersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenHoldersResponse?: shared.GetTokenHoldersResponse;
}
