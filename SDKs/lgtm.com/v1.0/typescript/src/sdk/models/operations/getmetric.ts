import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMetricPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=metric-id" })
  metricId: string;
}


export class GetMetricSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetMetricRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMetricPathParams;

  @Metadata()
  security: GetMetricSecurity;
}


export class GetMetricResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  metric?: shared.Metric;
}
