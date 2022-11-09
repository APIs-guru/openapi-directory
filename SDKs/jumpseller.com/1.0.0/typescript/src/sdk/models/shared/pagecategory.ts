import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PageCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;
}
