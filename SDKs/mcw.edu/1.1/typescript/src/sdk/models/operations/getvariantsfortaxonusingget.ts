import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVariantsForTaxonUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetVariantsForTaxonUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVariantsForTaxonUsingGetPathParams;
}


export class GetVariantsForTaxonUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
