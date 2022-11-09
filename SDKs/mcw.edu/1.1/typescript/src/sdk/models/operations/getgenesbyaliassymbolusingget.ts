import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenesByAliasSymbolUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=aliasSymbol" })
  aliasSymbol: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGenesByAliasSymbolUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenesByAliasSymbolUsingGetPathParams;
}


export class GetGenesByAliasSymbolUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
