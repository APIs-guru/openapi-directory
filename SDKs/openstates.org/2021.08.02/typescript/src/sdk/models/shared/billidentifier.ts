import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;
}
