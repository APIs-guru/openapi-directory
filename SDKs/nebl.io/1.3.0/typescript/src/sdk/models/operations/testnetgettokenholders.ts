import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetTokenHoldersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;
}


export class TestnetGetTokenHoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetTokenHoldersPathParams;
}


export class TestnetGetTokenHoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenHoldersResponse?: shared.GetTokenHoldersResponse;
}
