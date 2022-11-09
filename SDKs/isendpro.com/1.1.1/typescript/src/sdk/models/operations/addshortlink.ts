import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddShortlinkRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ShortlinkRequest;
}


export class AddShortlinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  shortlinkResponse?: shared.ShortlinkResponse;

  @Metadata()
  statusCode: number;
}
