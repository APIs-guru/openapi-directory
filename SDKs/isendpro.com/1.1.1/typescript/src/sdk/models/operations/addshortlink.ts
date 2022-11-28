import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddShortlinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ShortlinkRequest;
}


export class AddShortlinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  shortlinkResponse?: shared.ShortlinkResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
