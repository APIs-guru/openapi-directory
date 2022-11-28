import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTokenHoldersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;
}


export class GetTokenHoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTokenHoldersPathParams;
}


export class GetTokenHoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenHoldersResponse?: shared.GetTokenHoldersResponse;
}
