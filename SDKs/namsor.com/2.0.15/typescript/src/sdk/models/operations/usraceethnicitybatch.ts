import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsRaceEthnicityBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UsRaceEthnicityBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGeoIn;

  @SpeakeasyMetadata()
  security: UsRaceEthnicityBatchSecurity;
}


export class UsRaceEthnicityBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNameUsRaceEthnicityOut?: shared.BatchFirstLastNameUsRaceEthnicityOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
