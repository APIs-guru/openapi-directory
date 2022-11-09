import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  integratorCardPayloadResponse?: shared.IntegratorCardPayloadResponse;

  @Metadata()
  statusCode: number;
}
