import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServiceLiveStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ServiceLiveStatsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceLiveStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServiceLiveStatsPathParams;

  @Metadata()
  security: ServiceLiveStatsSecurity;
}


export class ServiceLiveStatsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  stats?: shared.Stats;

  @Metadata()
  statusCode: number;
}
