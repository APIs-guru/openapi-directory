import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiasporaBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DiasporaBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGeoIn;

  @Metadata()
  security: DiasporaBatchSecurity;
}


export class DiasporaBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchFirstLastNameDiasporaedOut?: shared.BatchFirstLastNameDiasporaedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
