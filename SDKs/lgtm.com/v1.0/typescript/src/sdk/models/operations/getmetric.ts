import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMetricPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metric-id" })
  metricId: string;
}


export class GetMetricSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetMetricRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMetricPathParams;

  @SpeakeasyMetadata()
  security: GetMetricSecurity;
}


export class GetMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  metric?: shared.Metric;
}
