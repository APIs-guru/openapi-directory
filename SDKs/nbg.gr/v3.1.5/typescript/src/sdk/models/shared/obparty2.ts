import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ObParty2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PartyId" })
  partyId: string;
}
