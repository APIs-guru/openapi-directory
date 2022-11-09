import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ToggleUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityId" })
  entityId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;
}
