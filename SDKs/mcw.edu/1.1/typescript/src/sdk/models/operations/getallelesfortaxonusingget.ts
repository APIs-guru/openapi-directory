import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAllelesForTaxonUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetAllelesForTaxonUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllelesForTaxonUsingGetPathParams;
}


export class GetAllelesForTaxonUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
