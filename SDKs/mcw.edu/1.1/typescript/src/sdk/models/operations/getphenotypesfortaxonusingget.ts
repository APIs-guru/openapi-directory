import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPhenotypesForTaxonUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetPhenotypesForTaxonUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPhenotypesForTaxonUsingGetPathParams;
}


export class GetPhenotypesForTaxonUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
