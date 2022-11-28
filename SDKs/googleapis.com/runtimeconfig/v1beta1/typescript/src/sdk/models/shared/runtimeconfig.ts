import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuntimeConfig
/** 
 * A RuntimeConfig resource is the primary resource in the Cloud RuntimeConfig service. A RuntimeConfig resource consists of metadata and a hierarchy of variables.
**/
export class RuntimeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
