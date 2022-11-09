import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ResourcesIdAllocationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ResourcesIdAllocationsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceAllocationInputModel?: shared.ResourceAllocationInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceAllocationInputModel1?: shared.ResourceAllocationInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceAllocationInputModel2?: shared.ResourceAllocationInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceAllocationInputModel3?: shared.ResourceAllocationInputModel;
}


export class PostSetupV1ResourcesIdAllocationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1ResourcesIdAllocationsPathParams;

  @Metadata()
  request?: PostSetupV1ResourcesIdAllocationsRequests;
}


export class PostSetupV1ResourcesIdAllocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
