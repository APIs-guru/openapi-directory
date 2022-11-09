import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetTunerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tunerId" })
  tunerId: string;
}


export class ResetTunerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ResetTunerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetTunerPathParams;

  @Metadata()
  security: ResetTunerSecurity;
}


export class ResetTunerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
