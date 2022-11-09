import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreprintProvidersPreprintsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preprint_provider_id" })
  preprintProviderId: string;
}


export class PreprintProvidersPreprintsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreprintProvidersPreprintsListPathParams;
}


export class PreprintProvidersPreprintsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
