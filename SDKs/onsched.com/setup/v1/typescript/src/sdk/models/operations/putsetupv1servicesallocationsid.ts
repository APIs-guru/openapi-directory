import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesAllocationsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceAllocationUpdateModel?: shared.ServiceAllocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceAllocationUpdateModel1?: shared.ServiceAllocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceAllocationUpdateModel2?: shared.ServiceAllocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceAllocationUpdateModel3?: shared.ServiceAllocationUpdateModel;
}


export class PutSetupV1ServicesAllocationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ServicesAllocationsIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ServicesAllocationsIdRequests;
}


export class PutSetupV1ServicesAllocationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceAllocationViewModel?: shared.ServiceAllocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
