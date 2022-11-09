import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomTemplate } from "./customtemplate";


export class ListTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=template", elemType: shared.CustomTemplate })
  template?: CustomTemplate[];
}
