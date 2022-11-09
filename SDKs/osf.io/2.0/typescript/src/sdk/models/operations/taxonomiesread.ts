import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxonomiesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxonomy_id" })
  taxonomyId: string;
}


export class TaxonomiesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TaxonomiesReadPathParams;
}


export class TaxonomiesReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
