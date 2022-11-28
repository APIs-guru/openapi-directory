import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchRedirectToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
