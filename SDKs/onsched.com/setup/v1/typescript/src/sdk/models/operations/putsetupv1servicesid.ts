import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ServicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceUpdateModel?: shared.ServiceUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  serviceUpdateModel1?: shared.ServiceUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceUpdateModel2?: shared.ServiceUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  serviceUpdateModel3?: shared.ServiceUpdateModel;
}


export class PutSetupV1ServicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ServicesIdPathParams;

  @Metadata()
  request?: PutSetupV1ServicesIdRequests;
}


export class PutSetupV1ServicesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceViewModel?: shared.ServiceViewModel;

  @Metadata()
  statusCode: number;
}
