import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreprintProviderTaxonomiesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preprint_provider_id" })
  preprintProviderId: string;
}


export class PreprintProviderTaxonomiesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreprintProviderTaxonomiesListPathParams;
}


export class PreprintProviderTaxonomiesListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
