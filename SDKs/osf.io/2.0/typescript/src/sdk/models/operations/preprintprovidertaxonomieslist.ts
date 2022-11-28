import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreprintProviderTaxonomiesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preprint_provider_id" })
  preprintProviderId: string;
}


export class PreprintProviderTaxonomiesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PreprintProviderTaxonomiesListPathParams;
}


export class PreprintProviderTaxonomiesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
