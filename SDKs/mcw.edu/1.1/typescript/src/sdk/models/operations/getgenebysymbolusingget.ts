import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGeneBySymbolUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=symbol" })
  symbol: string;
}


export class GetGeneBySymbolUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeneBySymbolUsingGetPathParams;
}


export class GetGeneBySymbolUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
