import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Option
/** 
 * An option for a field value.
**/
export class Option extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=displayOrder" })
  displayOrder: number;

  @Metadata({ data: "json, name=doubleData" })
  doubleData: number;

  @Metadata({ data: "json, name=hidden" })
  hidden: boolean;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=readOnly" })
  readOnly: boolean;

  @Metadata({ data: "json, name=value" })
  value: string;
}
