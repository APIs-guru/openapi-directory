import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
