import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1BusinessusersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1BusinessusersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1BusinessusersIdPathParams;
}


export class GetSetupV1BusinessusersIdResponse extends SpeakeasyBase {
  @Metadata()
  businessUserViewModel?: shared.BusinessUserViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
