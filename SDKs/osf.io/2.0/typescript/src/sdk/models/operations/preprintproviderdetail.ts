import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreprintProviderDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preprint_provider_id" })
  preprintProviderId: string;
}


export class PreprintProviderDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PreprintProviderDetailPathParams;
}


export class PreprintProviderDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
