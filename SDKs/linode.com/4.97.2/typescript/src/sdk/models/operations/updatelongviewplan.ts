import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLongviewPlanSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateLongviewPlanSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateLongviewPlanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateLongviewPlanSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateLongviewPlanSecurityOption2;
}


export class UpdateLongviewPlanRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LongviewPlan;

  @Metadata()
  security: UpdateLongviewPlanSecurity;
}


export class UpdateLongviewPlanDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateLongviewPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  longviewSubscription?: shared.LongviewSubscription;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLongviewPlanDefaultApplicationJsonObject?: UpdateLongviewPlanDefaultApplicationJson;
}
