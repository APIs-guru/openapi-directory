import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1BusinessusersRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  businessUserInputModel?: shared.BusinessUserInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  businessUserInputModel1?: shared.BusinessUserInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  businessUserInputModel2?: shared.BusinessUserInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  businessUserInputModel3?: shared.BusinessUserInputModel;
}


export class PostSetupV1BusinessusersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1BusinessusersRequests;
}


export class PostSetupV1BusinessusersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  businessUserViewModel?: shared.BusinessUserViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
