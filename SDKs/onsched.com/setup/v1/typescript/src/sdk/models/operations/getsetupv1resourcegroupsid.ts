import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ResourcegroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ResourcegroupsIdPathParams;
}


export class GetSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceGroupViewModel?: shared.ResourceGroupViewModel;

  @Metadata()
  statusCode: number;
}
