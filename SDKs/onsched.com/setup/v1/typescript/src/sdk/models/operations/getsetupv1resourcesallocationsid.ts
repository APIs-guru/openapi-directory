import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ResourcesAllocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ResourcesAllocationsIdPathParams;
}


export class GetSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceAllocationViewModel?: shared.ResourceAllocationViewModel;

  @Metadata()
  statusCode: number;
}
