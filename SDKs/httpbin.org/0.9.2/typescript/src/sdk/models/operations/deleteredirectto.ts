import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRedirectToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
