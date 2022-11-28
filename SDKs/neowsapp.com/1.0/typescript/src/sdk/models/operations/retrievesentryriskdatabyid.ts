import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveSentryRiskDataByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asteroid_id" })
  asteroidId: string;
}


export class RetrieveSentryRiskDataByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveSentryRiskDataByIdPathParams;
}


export class RetrieveSentryRiskDataByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sentryImpactRiskObject?: shared.SentryImpactRiskObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
