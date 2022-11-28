import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxonomiesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxonomy_id" })
  taxonomyId: string;
}


export class TaxonomiesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaxonomiesReadPathParams;
}


export class TaxonomiesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
