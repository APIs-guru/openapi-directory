import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGenesByAliasSymbolUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aliasSymbol" })
  aliasSymbol: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGenesByAliasSymbolUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenesByAliasSymbolUsingGetPathParams;
}


export class GetGenesByAliasSymbolUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
