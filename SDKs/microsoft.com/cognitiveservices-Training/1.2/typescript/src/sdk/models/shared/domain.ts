import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=Exportable" })
  exportable?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
