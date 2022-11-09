import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ResourcegroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ResourcegroupsIdPathParams;
}


export class DeleteSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceGroupViewModel?: shared.ResourceGroupViewModel;

  @Metadata()
  statusCode: number;
}
