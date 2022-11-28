import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServiceLiveStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ServiceLiveStatsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceLiveStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServiceLiveStatsPathParams;

  @SpeakeasyMetadata()
  security: ServiceLiveStatsSecurity;
}


export class ServiceLiveStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  stats?: shared.Stats;

  @SpeakeasyMetadata()
  statusCode: number;
}
