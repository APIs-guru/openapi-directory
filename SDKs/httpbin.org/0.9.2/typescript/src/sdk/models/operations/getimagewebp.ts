import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImageWebpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
