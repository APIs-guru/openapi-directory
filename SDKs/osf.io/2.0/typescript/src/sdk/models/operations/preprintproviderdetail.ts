import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreprintProviderDetailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preprint_provider_id" })
  preprintProviderId: string;
}


export class PreprintProviderDetailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreprintProviderDetailPathParams;
}


export class PreprintProviderDetailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
