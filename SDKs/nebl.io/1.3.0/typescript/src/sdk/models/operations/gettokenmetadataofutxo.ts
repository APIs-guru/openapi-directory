import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTokenMetadataOfUtxoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=utxo" })
  utxo: string;
}


export class GetTokenMetadataOfUtxoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=verbosity" })
  verbosity?: number;
}


export class GetTokenMetadataOfUtxoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTokenMetadataOfUtxoPathParams;

  @Metadata()
  queryParams: GetTokenMetadataOfUtxoQueryParams;
}


export class GetTokenMetadataOfUtxoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
