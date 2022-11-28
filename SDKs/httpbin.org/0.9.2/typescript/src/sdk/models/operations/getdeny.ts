import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDenyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
