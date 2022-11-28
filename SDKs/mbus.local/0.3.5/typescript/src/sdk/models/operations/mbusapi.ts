import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MbusApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  textError?: string;

  @SpeakeasyMetadata()
  yaml?: string;
}
