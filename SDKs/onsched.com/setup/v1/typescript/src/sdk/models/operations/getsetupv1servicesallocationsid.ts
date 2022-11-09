import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesAllocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesAllocationsIdPathParams;
}


export class GetSetupV1ServicesAllocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAllocationViewModel?: shared.ServiceAllocationViewModel;

  @Metadata()
  statusCode: number;
}
