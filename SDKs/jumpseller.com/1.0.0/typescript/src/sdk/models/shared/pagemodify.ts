import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageModifyFields } from "./pagemodifyfields";



export class PageModify extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: PageModifyFields;
}
