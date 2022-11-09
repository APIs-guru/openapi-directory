import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
