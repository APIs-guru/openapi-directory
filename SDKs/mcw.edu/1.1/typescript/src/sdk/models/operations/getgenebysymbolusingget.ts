import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGeneBySymbolUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=symbol" })
  symbol: string;
}


export class GetGeneBySymbolUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeneBySymbolUsingGetPathParams;
}


export class GetGeneBySymbolUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
