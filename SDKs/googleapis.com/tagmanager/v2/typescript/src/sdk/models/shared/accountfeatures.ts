import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=supportMultipleContainers" })
  supportMultipleContainers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportUserPermissions" })
  supportUserPermissions?: boolean;
}
