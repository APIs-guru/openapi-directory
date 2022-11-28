import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTokenMetadataOfUtxoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenid" })
  tokenid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=utxo" })
  utxo: string;
}


export class GetTokenMetadataOfUtxoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verbosity" })
  verbosity?: number;
}


export class GetTokenMetadataOfUtxoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTokenMetadataOfUtxoPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTokenMetadataOfUtxoQueryParams;
}


export class GetTokenMetadataOfUtxoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
