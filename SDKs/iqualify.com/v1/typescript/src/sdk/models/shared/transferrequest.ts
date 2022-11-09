import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransferRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromOfferingId" })
  fromOfferingId?: string;

  @Metadata({ data: "json, name=sendInvite" })
  sendInvite?: boolean;

  @Metadata({ data: "json, name=toOfferingId" })
  toOfferingId?: string;
}
