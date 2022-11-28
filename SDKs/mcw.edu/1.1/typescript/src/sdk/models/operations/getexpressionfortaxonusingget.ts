import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExpressionForTaxonUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetExpressionForTaxonUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExpressionForTaxonUsingGetPathParams;
}


export class GetExpressionForTaxonUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
