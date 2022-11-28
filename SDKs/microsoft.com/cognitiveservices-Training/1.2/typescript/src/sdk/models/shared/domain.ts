import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Exportable" })
  exportable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
