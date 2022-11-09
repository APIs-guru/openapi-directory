import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ResourcegroupsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceGroupInputModel?: shared.ResourceGroupInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceGroupInputModel1?: shared.ResourceGroupInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceGroupInputModel2?: shared.ResourceGroupInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceGroupInputModel3?: shared.ResourceGroupInputModel;
}


export class PostSetupV1ResourcegroupsRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1ResourcegroupsRequests;
}


export class PostSetupV1ResourcegroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceGroupViewModel?: shared.ResourceGroupViewModel;

  @Metadata()
  statusCode: number;
}
