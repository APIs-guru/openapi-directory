import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetTokenMetadataOfUtxoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=utxo" })
  utxo: string;
}


export class TestnetGetTokenMetadataOfUtxoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verbosity" })
  verbosity?: number;
}


export class TestnetGetTokenMetadataOfUtxoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetTokenMetadataOfUtxoPathParams;

  @SpeakeasyMetadata()
  queryParams: TestnetGetTokenMetadataOfUtxoQueryParams;
}


export class TestnetGetTokenMetadataOfUtxoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
