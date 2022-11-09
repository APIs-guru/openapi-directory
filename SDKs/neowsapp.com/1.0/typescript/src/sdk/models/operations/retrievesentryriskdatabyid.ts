import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveSentryRiskDataByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asteroid_id" })
  asteroidId: string;
}


export class RetrieveSentryRiskDataByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveSentryRiskDataByIdPathParams;
}


export class RetrieveSentryRiskDataByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sentryImpactRiskObject?: shared.SentryImpactRiskObject;

  @Metadata()
  statusCode: number;
}
