import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
