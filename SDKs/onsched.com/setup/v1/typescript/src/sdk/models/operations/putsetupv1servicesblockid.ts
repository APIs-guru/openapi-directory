import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ServicesBlockIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesBlockIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceBlockUpdateModel?: shared.ServiceBlockUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceBlockUpdateModel1?: shared.ServiceBlockUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceBlockUpdateModel2?: shared.ServiceBlockUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceBlockUpdateModel3?: shared.ServiceBlockUpdateModel;
}


export class PutSetupV1ServicesBlockIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ServicesBlockIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ServicesBlockIdRequests;
}


export class PutSetupV1ServicesBlockIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceBlockViewModel?: shared.ServiceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
