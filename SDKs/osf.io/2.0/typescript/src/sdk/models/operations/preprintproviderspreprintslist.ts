import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreprintProvidersPreprintsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preprint_provider_id" })
  preprintProviderId: string;
}


export class PreprintProvidersPreprintsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PreprintProvidersPreprintsListPathParams;
}


export class PreprintProvidersPreprintsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
