import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSpec200ApplicationJsonObject?: Map<string, any>;
}
