import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BaseReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
