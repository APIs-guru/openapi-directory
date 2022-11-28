import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Option
/** 
 * An option for a field value.
**/
export class Option extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayOrder" })
  displayOrder: number;

  @SpeakeasyMetadata({ data: "json, name=doubleData" })
  doubleData: number;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
