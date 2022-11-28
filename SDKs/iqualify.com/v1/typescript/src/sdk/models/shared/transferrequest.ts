import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromOfferingId" })
  fromOfferingId?: string;

  @SpeakeasyMetadata({ data: "json, name=sendInvite" })
  sendInvite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toOfferingId" })
  toOfferingId?: string;
}
