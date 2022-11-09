import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


// LabelField
/** 
 * Representation of a label field.
**/
export class LabelField extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateString" })
  dateString?: Date[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=integer" })
  integer?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=selection" })
  selection?: string[];

  @Metadata({ data: "json, name=text" })
  text?: string[];

  @Metadata({ data: "json, name=user", elemType: shared.User })
  user?: User[];

  @Metadata({ data: "json, name=valueType" })
  valueType?: string;
}
