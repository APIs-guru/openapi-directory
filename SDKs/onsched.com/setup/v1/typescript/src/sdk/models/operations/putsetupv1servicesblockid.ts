import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ServicesBlockIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesBlockIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceBlockUpdateModel?: shared.ServiceBlockUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  serviceBlockUpdateModel1?: shared.ServiceBlockUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceBlockUpdateModel2?: shared.ServiceBlockUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  serviceBlockUpdateModel3?: shared.ServiceBlockUpdateModel;
}


export class PutSetupV1ServicesBlockIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ServicesBlockIdPathParams;

  @Metadata()
  request?: PutSetupV1ServicesBlockIdRequests;
}


export class PutSetupV1ServicesBlockIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceBlockViewModel?: shared.ServiceBlockViewModel;

  @Metadata()
  statusCode: number;
}
