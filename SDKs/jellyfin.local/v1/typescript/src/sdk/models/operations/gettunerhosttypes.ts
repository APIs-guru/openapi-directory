import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTunerHostTypesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetTunerHostTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetTunerHostTypesSecurity;
}


export class GetTunerHostTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.NameIdPair })
  nameIdPairs?: shared.NameIdPair[];

  @SpeakeasyMetadata()
  statusCode: number;
}
