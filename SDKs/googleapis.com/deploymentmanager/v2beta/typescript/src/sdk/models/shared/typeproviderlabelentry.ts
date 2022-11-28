import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TypeProviderLabelEntry
/** 
 * Label object for TypeProviders
**/
export class TypeProviderLabelEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
