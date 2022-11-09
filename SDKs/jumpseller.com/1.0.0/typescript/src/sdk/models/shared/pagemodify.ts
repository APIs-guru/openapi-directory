import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PageModifyFields } from "./pagemodifyfields";


export class PageModify extends SpeakeasyBase {
  @Metadata({ data: "json, name=page" })
  page?: PageModifyFields;
}
