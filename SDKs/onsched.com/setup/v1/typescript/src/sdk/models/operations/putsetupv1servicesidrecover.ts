import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ServicesIdRecoverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesIdRecoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ServicesIdRecoverPathParams;
}


export class PutSetupV1ServicesIdRecoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceViewModel?: shared.ServiceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
