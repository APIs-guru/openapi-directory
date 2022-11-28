import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcegroupsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcegroupsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceGroupUpdateModel?: shared.ResourceGroupUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceGroupUpdateModel1?: shared.ResourceGroupUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceGroupUpdateModel2?: shared.ResourceGroupUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceGroupUpdateModel3?: shared.ResourceGroupUpdateModel;
}


export class PutSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ResourcegroupsIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ResourcegroupsIdRequests;
}


export class PutSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceGroupViewModel?: shared.ResourceGroupViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
