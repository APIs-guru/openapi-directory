import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ServicesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceUpdateModel?: shared.ServiceUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceUpdateModel1?: shared.ServiceUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceUpdateModel2?: shared.ServiceUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceUpdateModel3?: shared.ServiceUpdateModel;
}


export class PutSetupV1ServicesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ServicesIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ServicesIdRequests;
}


export class PutSetupV1ServicesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceViewModel?: shared.ServiceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
