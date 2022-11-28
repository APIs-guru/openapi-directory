import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ServicesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceInputModel?: shared.ServiceInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceInputModel1?: shared.ServiceInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceInputModel2?: shared.ServiceInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceInputModel3?: shared.ServiceInputModel;
}


export class PostSetupV1ServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1ServicesRequests;
}


export class PostSetupV1ServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceViewModel?: shared.ServiceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
