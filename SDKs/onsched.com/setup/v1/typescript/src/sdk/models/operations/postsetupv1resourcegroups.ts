import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ResourcegroupsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceGroupInputModel?: shared.ResourceGroupInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceGroupInputModel1?: shared.ResourceGroupInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceGroupInputModel2?: shared.ResourceGroupInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceGroupInputModel3?: shared.ResourceGroupInputModel;
}


export class PostSetupV1ResourcegroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1ResourcegroupsRequests;
}


export class PostSetupV1ResourcegroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceGroupViewModel?: shared.ResourceGroupViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
