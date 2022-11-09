import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CategoryDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;
}
