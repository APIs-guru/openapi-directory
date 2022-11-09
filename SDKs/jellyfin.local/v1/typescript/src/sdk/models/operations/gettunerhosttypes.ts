import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTunerHostTypesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTunerHostTypesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetTunerHostTypesSecurity;
}


export class GetTunerHostTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.NameIdPair })
  nameIdPairs?: shared.NameIdPair[];

  @Metadata()
  statusCode: number;
}
