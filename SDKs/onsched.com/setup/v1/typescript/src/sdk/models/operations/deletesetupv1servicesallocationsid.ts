import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ServicesAllocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ServicesAllocationsIdPathParams;
}


export class DeleteSetupV1ServicesAllocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAllocationViewModel?: shared.ServiceAllocationViewModel;

  @Metadata()
  statusCode: number;
}
