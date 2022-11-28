import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
