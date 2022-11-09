import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ResourcesIdBlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ResourcesIdBlockRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceBlockInputModel?: shared.ResourceBlockInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceBlockInputModel1?: shared.ResourceBlockInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceBlockInputModel2?: shared.ResourceBlockInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceBlockInputModel3?: shared.ResourceBlockInputModel;
}


export class PostSetupV1ResourcesIdBlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1ResourcesIdBlockPathParams;

  @Metadata()
  request?: PostSetupV1ResourcesIdBlockRequests;
}


export class PostSetupV1ResourcesIdBlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
