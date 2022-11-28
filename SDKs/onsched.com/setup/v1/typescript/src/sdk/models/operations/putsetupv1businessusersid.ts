import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1BusinessusersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1BusinessusersIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  businessUserUpdateModel?: shared.BusinessUserUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  businessUserUpdateModel1?: shared.BusinessUserUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  businessUserUpdateModel2?: shared.BusinessUserUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  businessUserUpdateModel3?: shared.BusinessUserUpdateModel;
}


export class PutSetupV1BusinessusersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1BusinessusersIdPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1BusinessusersIdRequests;
}


export class PutSetupV1BusinessusersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  businessUserViewModel?: shared.BusinessUserViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
