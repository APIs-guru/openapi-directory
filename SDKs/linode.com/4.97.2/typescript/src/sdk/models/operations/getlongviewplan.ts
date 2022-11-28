import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLongviewPlanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLongviewPlanDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLongviewPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetLongviewPlanSecurity;
}


export class GetLongviewPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  longviewSubscription?: shared.LongviewSubscription;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLongviewPlanDefaultApplicationJsonObject?: GetLongviewPlanDefaultApplicationJson;
}
