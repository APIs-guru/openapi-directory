import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integratorCardPayloadResponse?: shared.IntegratorCardPayloadResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
