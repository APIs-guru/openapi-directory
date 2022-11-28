import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ToggleUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;
}
