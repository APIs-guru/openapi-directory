import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRandomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
