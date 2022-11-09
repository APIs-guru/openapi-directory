import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsRaceEthnicityBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UsRaceEthnicityBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGeoIn;

  @Metadata()
  security: UsRaceEthnicityBatchSecurity;
}


export class UsRaceEthnicityBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchFirstLastNameUsRaceEthnicityOut?: shared.BatchFirstLastNameUsRaceEthnicityOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
