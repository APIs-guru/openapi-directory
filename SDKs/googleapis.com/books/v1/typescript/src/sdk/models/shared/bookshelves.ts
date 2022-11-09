import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bookshelf } from "./bookshelf";


export class Bookshelves extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Bookshelf })
  items?: Bookshelf[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
