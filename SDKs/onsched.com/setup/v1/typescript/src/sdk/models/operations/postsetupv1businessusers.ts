import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1BusinessusersRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  businessUserInputModel?: shared.BusinessUserInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  businessUserInputModel1?: shared.BusinessUserInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  businessUserInputModel2?: shared.BusinessUserInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  businessUserInputModel3?: shared.BusinessUserInputModel;
}


export class PostSetupV1BusinessusersRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1BusinessusersRequests;
}


export class PostSetupV1BusinessusersResponse extends SpeakeasyBase {
  @Metadata()
  businessUserViewModel?: shared.BusinessUserViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
