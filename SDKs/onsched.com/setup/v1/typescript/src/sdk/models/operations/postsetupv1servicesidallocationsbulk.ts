import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ServicesIdAllocationsBulkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ServicesIdAllocationsBulkRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceAllocationsInputModel?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json" })
  serviceAllocationsInputModel1?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceAllocationsInputModel2?: Map<string, any>;

  @Metadata({ data: "request, media_type=text/json" })
  serviceAllocationsInputModel3?: Map<string, any>;
}


export class PostSetupV1ServicesIdAllocationsBulkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1ServicesIdAllocationsBulkPathParams;

  @Metadata()
  request?: PostSetupV1ServicesIdAllocationsBulkRequests;
}


export class PostSetupV1ServicesIdAllocationsBulkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ServiceAllocationViewModel })
  serviceAllocationViewModels?: shared.ServiceAllocationViewModel[];

  @Metadata()
  statusCode: number;
}
