import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiaInventorySettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventoryVerificationContactEmail" })
  inventoryVerificationContactEmail?: string;

  @Metadata({ data: "json, name=inventoryVerificationContactName" })
  inventoryVerificationContactName?: string;

  @Metadata({ data: "json, name=inventoryVerificationContactStatus" })
  inventoryVerificationContactStatus?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
