import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InHeader
/** 
 * JWT location in a header
**/
export class InHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=remove" })
  remove: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
