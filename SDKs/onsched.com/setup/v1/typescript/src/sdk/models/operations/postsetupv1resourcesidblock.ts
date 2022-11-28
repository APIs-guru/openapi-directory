import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ResourcesIdBlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ResourcesIdBlockRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceBlockInputModel?: shared.ResourceBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceBlockInputModel1?: shared.ResourceBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceBlockInputModel2?: shared.ResourceBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceBlockInputModel3?: shared.ResourceBlockInputModel;
}


export class PostSetupV1ResourcesIdBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1ResourcesIdBlockPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ResourcesIdBlockRequests;
}


export class PostSetupV1ResourcesIdBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
