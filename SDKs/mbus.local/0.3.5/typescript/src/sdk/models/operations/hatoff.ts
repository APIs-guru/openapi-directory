import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HatOffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  textError?: string;
}
