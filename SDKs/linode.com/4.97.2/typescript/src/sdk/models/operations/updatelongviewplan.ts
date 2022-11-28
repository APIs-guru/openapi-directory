import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLongviewPlanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateLongviewPlanDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateLongviewPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LongviewPlan;

  @SpeakeasyMetadata()
  security: UpdateLongviewPlanSecurity;
}


export class UpdateLongviewPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  longviewSubscription?: shared.LongviewSubscription;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateLongviewPlanDefaultApplicationJsonObject?: UpdateLongviewPlanDefaultApplicationJson;
}
