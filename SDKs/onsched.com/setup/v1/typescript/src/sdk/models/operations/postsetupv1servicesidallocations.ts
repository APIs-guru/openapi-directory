import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ServicesIdAllocationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ServicesIdAllocationsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceAllocationInputModel?: shared.ServiceAllocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceAllocationInputModel1?: shared.ServiceAllocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceAllocationInputModel2?: shared.ServiceAllocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceAllocationInputModel3?: shared.ServiceAllocationInputModel;
}


export class PostSetupV1ServicesIdAllocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1ServicesIdAllocationsPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ServicesIdAllocationsRequests;
}


export class PostSetupV1ServicesIdAllocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceAllocationViewModel?: shared.ServiceAllocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
