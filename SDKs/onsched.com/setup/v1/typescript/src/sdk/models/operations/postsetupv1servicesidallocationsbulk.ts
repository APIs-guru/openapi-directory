import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ServicesIdAllocationsBulkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ServicesIdAllocationsBulkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceAllocationsInputModel?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceAllocationsInputModel1?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceAllocationsInputModel2?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceAllocationsInputModel3?: Map<string, any>;
}


export class PostSetupV1ServicesIdAllocationsBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1ServicesIdAllocationsBulkPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ServicesIdAllocationsBulkRequests;
}


export class PostSetupV1ServicesIdAllocationsBulkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ServiceAllocationViewModel })
  serviceAllocationViewModels?: shared.ServiceAllocationViewModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
