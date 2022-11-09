import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubaccountAddRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubaccountAddRequest;
}


export class SubaccountAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  statusCode: number;

  @Metadata()
  subaccountAddResponse?: shared.SubaccountAddResponse;
}
