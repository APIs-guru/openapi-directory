import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerCategoryFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
