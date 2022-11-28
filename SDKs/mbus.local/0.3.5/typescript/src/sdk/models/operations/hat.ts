import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  hat?: any;

  @SpeakeasyMetadata()
  textError?: string;
}
