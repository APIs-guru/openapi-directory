import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// LabelField
/** 
 * Representation of a label field.
**/
export class LabelField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateString" })
  dateString?: Date[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=integer" })
  integer?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=selection" })
  selection?: string[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];

  @SpeakeasyMetadata({ data: "json, name=user", elemType: User })
  user?: User[];

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: string;
}
