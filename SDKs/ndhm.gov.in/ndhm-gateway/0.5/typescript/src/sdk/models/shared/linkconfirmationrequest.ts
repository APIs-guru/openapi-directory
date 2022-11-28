import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinkConfirmationRequestConfirmation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkRefNumber" })
  linkRefNumber: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}


export class LinkConfirmationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmation" })
  confirmation: LinkConfirmationRequestConfirmation;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
