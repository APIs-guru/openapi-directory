import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=typeId" })
  typeId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
