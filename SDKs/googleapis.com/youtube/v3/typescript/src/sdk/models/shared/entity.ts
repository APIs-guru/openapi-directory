import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=typeId" })
  typeId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
