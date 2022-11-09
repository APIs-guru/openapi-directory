import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ResourcesAllocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ResourcesAllocationsIdPathParams;
}


export class DeleteSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
