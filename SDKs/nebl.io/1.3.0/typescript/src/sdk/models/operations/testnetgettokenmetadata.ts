import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetTokenMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;
}


export class TestnetGetTokenMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verbosity" })
  verbosity?: number;
}


export class TestnetGetTokenMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetTokenMetadataPathParams;

  @SpeakeasyMetadata()
  queryParams: TestnetGetTokenMetadataQueryParams;
}


export class TestnetGetTokenMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
