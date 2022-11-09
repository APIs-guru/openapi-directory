import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcesAllocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesAllocationsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceAllocationUpdateModel?: shared.ResourceAllocationUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceAllocationUpdateModel1?: shared.ResourceAllocationUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceAllocationUpdateModel2?: shared.ResourceAllocationUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceAllocationUpdateModel3?: shared.ResourceAllocationUpdateModel;
}


export class PutSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ResourcesAllocationsIdPathParams;

  @Metadata()
  request?: PutSetupV1ResourcesAllocationsIdRequests;
}


export class PutSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
