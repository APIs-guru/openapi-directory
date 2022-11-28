import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcesAllocationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesAllocationsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceAllocationUpdateModel?: shared.ResourceAllocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceAllocationUpdateModel1?: shared.ResourceAllocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceAllocationUpdateModel2?: shared.ResourceAllocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceAllocationUpdateModel3?: shared.ResourceAllocationUpdateModel;
}


export class PutSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ResourcesAllocationsIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ResourcesAllocationsIdRequests;
}


export class PutSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
