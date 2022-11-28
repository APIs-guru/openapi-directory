import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiaInventorySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventoryVerificationContactEmail" })
  inventoryVerificationContactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryVerificationContactName" })
  inventoryVerificationContactName?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryVerificationContactStatus" })
  inventoryVerificationContactStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
