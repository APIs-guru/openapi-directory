import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ObOtherCodeType10 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
