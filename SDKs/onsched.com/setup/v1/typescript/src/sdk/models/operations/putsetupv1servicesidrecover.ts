import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ServicesIdRecoverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesIdRecoverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ServicesIdRecoverPathParams;
}


export class PutSetupV1ServicesIdRecoverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceViewModel?: shared.ServiceViewModel;

  @Metadata()
  statusCode: number;
}
