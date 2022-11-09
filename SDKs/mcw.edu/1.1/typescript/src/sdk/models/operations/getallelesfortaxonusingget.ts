import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAllelesForTaxonUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetAllelesForTaxonUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllelesForTaxonUsingGetPathParams;
}


export class GetAllelesForTaxonUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
