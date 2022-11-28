import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
