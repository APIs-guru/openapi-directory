import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BillIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier: string;
}
