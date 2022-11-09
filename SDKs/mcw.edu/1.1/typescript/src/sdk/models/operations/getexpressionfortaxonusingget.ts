import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExpressionForTaxonUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetExpressionForTaxonUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExpressionForTaxonUsingGetPathParams;
}


export class GetExpressionForTaxonUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
