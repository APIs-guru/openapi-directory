import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
