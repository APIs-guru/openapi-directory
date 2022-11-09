import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ServicesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceInputModel?: shared.ServiceInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  serviceInputModel1?: shared.ServiceInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceInputModel2?: shared.ServiceInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  serviceInputModel3?: shared.ServiceInputModel;
}


export class PostSetupV1ServicesRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1ServicesRequests;
}


export class PostSetupV1ServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceViewModel?: shared.ServiceViewModel;

  @Metadata()
  statusCode: number;
}
