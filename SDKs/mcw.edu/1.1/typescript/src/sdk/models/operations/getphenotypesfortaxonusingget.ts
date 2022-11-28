import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPhenotypesForTaxonUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetPhenotypesForTaxonUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPhenotypesForTaxonUsingGetPathParams;
}


export class GetPhenotypesForTaxonUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
