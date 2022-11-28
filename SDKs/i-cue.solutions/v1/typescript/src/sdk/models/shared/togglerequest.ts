import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ToggleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;
}
