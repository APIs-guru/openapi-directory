import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetTokenMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;
}


export class TestnetGetTokenMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=verbosity" })
  verbosity?: number;
}


export class TestnetGetTokenMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetTokenMetadataPathParams;

  @Metadata()
  queryParams: TestnetGetTokenMetadataQueryParams;
}


export class TestnetGetTokenMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
