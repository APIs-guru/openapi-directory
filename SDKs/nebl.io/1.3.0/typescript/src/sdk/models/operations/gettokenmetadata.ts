import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTokenMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;
}


export class GetTokenMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=verbosity" })
  verbosity?: number;
}


export class GetTokenMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTokenMetadataPathParams;

  @Metadata()
  queryParams: GetTokenMetadataQueryParams;
}


export class GetTokenMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
