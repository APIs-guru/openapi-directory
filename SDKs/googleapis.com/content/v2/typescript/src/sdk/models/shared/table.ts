import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Headers } from "./headers";
import { Headers } from "./headers";
import { Row } from "./row";


export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnHeaders" })
  columnHeaders?: Headers;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rowHeaders" })
  rowHeaders?: Headers;

  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];
}
