import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetTokenMetadataOfUtxoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=utxo" })
  utxo: string;
}


export class TestnetGetTokenMetadataOfUtxoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=verbosity" })
  verbosity?: number;
}


export class TestnetGetTokenMetadataOfUtxoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetTokenMetadataOfUtxoPathParams;

  @Metadata()
  queryParams: TestnetGetTokenMetadataOfUtxoQueryParams;
}


export class TestnetGetTokenMetadataOfUtxoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
