import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Detail extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
