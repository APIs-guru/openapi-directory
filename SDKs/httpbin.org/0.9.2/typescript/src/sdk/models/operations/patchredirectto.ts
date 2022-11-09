import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchRedirectToResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
