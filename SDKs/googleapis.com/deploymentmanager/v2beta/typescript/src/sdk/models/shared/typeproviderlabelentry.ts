import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TypeProviderLabelEntry
/** 
 * Label object for TypeProviders
**/
export class TypeProviderLabelEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
