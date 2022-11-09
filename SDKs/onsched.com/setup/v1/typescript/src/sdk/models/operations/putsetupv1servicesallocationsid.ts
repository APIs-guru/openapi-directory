import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesAllocationsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceAllocationUpdateModel?: shared.ServiceAllocationUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  serviceAllocationUpdateModel1?: shared.ServiceAllocationUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceAllocationUpdateModel2?: shared.ServiceAllocationUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  serviceAllocationUpdateModel3?: shared.ServiceAllocationUpdateModel;
}


export class PutSetupV1ServicesAllocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ServicesAllocationsIdPathParams;

  @Metadata()
  request?: PutSetupV1ServicesAllocationsIdRequests;
}


export class PutSetupV1ServicesAllocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAllocationViewModel?: shared.ServiceAllocationViewModel;

  @Metadata()
  statusCode: number;
}
