import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HouseEnum } from "./houseenum";


export class AmendmentMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=house" })
  house?: HouseEnum;

  @Metadata({ data: "json, name=isLead" })
  isLead?: boolean;

  @Metadata({ data: "json, name=memberFrom" })
  memberFrom?: string;

  @Metadata({ data: "json, name=memberId" })
  memberId?: number;

  @Metadata({ data: "json, name=memberPage" })
  memberPage?: string;

  @Metadata({ data: "json, name=memberPhoto" })
  memberPhoto?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=party" })
  party?: string;

  @Metadata({ data: "json, name=partyColour" })
  partyColour?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}
