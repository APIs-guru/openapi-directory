import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLongviewPlanSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLongviewPlanSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLongviewPlanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLongviewPlanSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLongviewPlanSecurityOption2;
}


export class GetLongviewPlanRequest extends SpeakeasyBase {
  @Metadata()
  security: GetLongviewPlanSecurity;
}


export class GetLongviewPlanDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLongviewPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  longviewSubscription?: shared.LongviewSubscription;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLongviewPlanDefaultApplicationJsonObject?: GetLongviewPlanDefaultApplicationJson;
}
