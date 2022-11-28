import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  otoroshiHealth?: shared.OtoroshiHealth;

  @SpeakeasyMetadata()
  statusCode: number;
}
