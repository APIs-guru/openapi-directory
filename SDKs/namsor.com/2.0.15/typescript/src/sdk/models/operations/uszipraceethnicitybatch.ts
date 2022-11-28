import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsZipRaceEthnicityBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UsZipRaceEthnicityBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGeoZippedIn;

  @SpeakeasyMetadata()
  security: UsZipRaceEthnicityBatchSecurity;
}


export class UsZipRaceEthnicityBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNameUsRaceEthnicityOut?: shared.BatchFirstLastNameUsRaceEthnicityOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
