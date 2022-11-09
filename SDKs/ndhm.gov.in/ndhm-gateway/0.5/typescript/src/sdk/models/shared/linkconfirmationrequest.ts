import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinkConfirmationRequestConfirmation extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkRefNumber" })
  linkRefNumber: string;

  @Metadata({ data: "json, name=token" })
  token: string;
}


export class LinkConfirmationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmation" })
  confirmation: LinkConfirmationRequestConfirmation;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
