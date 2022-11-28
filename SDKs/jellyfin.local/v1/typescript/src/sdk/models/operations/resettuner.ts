import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetTunerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tunerId" })
  tunerId: string;
}


export class ResetTunerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ResetTunerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetTunerPathParams;

  @SpeakeasyMetadata()
  security: ResetTunerSecurity;
}


export class ResetTunerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
