import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HealthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  otoroshiHealth?: shared.OtoroshiHealth;

  @Metadata()
  statusCode: number;
}
