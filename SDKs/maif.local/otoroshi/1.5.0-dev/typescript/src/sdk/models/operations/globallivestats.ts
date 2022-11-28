import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GlobalLiveStatsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class GlobalLiveStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GlobalLiveStatsSecurity;
}


export class GlobalLiveStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  stats?: shared.Stats;

  @SpeakeasyMetadata()
  statusCode: number;
}
