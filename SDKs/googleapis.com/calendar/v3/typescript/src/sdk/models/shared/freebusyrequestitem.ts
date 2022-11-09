import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FreeBusyRequestItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
