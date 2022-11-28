import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ResourcesIdAllocationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ResourcesIdAllocationsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceAllocationInputModel?: shared.ResourceAllocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceAllocationInputModel1?: shared.ResourceAllocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceAllocationInputModel2?: shared.ResourceAllocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceAllocationInputModel3?: shared.ResourceAllocationInputModel;
}


export class PostSetupV1ResourcesIdAllocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1ResourcesIdAllocationsPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ResourcesIdAllocationsRequests;
}


export class PostSetupV1ResourcesIdAllocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
