import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ServicesIdAllocationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ServicesIdAllocationsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceAllocationInputModel?: shared.ServiceAllocationInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  serviceAllocationInputModel1?: shared.ServiceAllocationInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceAllocationInputModel2?: shared.ServiceAllocationInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  serviceAllocationInputModel3?: shared.ServiceAllocationInputModel;
}


export class PostSetupV1ServicesIdAllocationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1ServicesIdAllocationsPathParams;

  @Metadata()
  request?: PostSetupV1ServicesIdAllocationsRequests;
}


export class PostSetupV1ServicesIdAllocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAllocationViewModel?: shared.ServiceAllocationViewModel;

  @Metadata()
  statusCode: number;
}
