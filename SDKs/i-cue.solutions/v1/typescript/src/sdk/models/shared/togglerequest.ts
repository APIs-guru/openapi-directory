import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ToggleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;
}
