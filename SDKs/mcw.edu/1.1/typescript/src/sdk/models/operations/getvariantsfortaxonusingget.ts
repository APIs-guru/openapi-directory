import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVariantsForTaxonUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetVariantsForTaxonUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVariantsForTaxonUsingGetPathParams;
}


export class GetVariantsForTaxonUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
