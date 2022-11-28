import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
