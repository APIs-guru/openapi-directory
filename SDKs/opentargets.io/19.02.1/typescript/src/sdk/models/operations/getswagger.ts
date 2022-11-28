import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSwaggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
