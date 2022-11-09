import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GlobalLiveStatsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class GlobalLiveStatsRequest extends SpeakeasyBase {
  @Metadata()
  security: GlobalLiveStatsSecurity;
}


export class GlobalLiveStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  stats?: shared.Stats;

  @Metadata()
  statusCode: number;
}
