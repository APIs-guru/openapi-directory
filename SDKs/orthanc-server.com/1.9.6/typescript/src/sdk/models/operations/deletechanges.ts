import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
