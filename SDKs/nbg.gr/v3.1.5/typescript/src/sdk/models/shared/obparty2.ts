import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ObParty2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyId" })
  partyId: string;
}
