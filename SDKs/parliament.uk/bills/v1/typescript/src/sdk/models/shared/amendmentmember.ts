import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HouseEnum } from "./houseenum";



export class AmendmentMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: HouseEnum;

  @SpeakeasyMetadata({ data: "json, name=isLead" })
  isLead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memberFrom" })
  memberFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=memberId" })
  memberId?: number;

  @SpeakeasyMetadata({ data: "json, name=memberPage" })
  memberPage?: string;

  @SpeakeasyMetadata({ data: "json, name=memberPhoto" })
  memberPhoto?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=partyColour" })
  partyColour?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}
