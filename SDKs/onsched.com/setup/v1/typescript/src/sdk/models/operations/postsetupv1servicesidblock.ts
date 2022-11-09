import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ServicesIdBlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ServicesIdBlockRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceBlockInputModel?: shared.ServiceBlockInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  serviceBlockInputModel1?: shared.ServiceBlockInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceBlockInputModel2?: shared.ServiceBlockInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  serviceBlockInputModel3?: shared.ServiceBlockInputModel;
}


export class PostSetupV1ServicesIdBlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1ServicesIdBlockPathParams;

  @Metadata()
  request?: PostSetupV1ServicesIdBlockRequests;
}


export class PostSetupV1ServicesIdBlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceBlockViewModel?: shared.ServiceBlockViewModel;

  @Metadata()
  statusCode: number;
}
