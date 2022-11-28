import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FreeBusyRequestItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
