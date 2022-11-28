import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTokenMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;
}


export class GetTokenMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verbosity" })
  verbosity?: number;
}


export class GetTokenMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTokenMetadataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTokenMetadataQueryParams;
}


export class GetTokenMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
