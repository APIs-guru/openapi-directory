import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductCreateModify extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom" })
  custom?: any;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serial" })
  serial?: string;
}
