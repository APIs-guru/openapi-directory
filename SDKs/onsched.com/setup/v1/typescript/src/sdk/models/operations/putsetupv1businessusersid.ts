import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1BusinessusersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1BusinessusersIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  businessUserUpdateModel?: shared.BusinessUserUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  businessUserUpdateModel1?: shared.BusinessUserUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  businessUserUpdateModel2?: shared.BusinessUserUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  businessUserUpdateModel3?: shared.BusinessUserUpdateModel;
}


export class PutSetupV1BusinessusersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1BusinessusersIdPathParams;

  @Metadata()
  request?: PutSetupV1BusinessusersIdRequests;
}


export class PutSetupV1BusinessusersIdResponse extends SpeakeasyBase {
  @Metadata()
  businessUserViewModel?: shared.BusinessUserViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
