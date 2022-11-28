import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
