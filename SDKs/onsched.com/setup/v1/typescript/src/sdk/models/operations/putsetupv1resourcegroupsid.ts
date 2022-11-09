import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcegroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcegroupsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceGroupUpdateModel?: shared.ResourceGroupUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceGroupUpdateModel1?: shared.ResourceGroupUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceGroupUpdateModel2?: shared.ResourceGroupUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceGroupUpdateModel3?: shared.ResourceGroupUpdateModel;
}


export class PutSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ResourcegroupsIdPathParams;

  @Metadata()
  request?: PutSetupV1ResourcegroupsIdRequests;
}


export class PutSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceGroupViewModel?: shared.ResourceGroupViewModel;

  @Metadata()
  statusCode: number;
}
