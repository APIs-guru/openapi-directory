import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuntimeConfig
/** 
 * A RuntimeConfig resource is the primary resource in the Cloud RuntimeConfig service. A RuntimeConfig resource consists of metadata and a hierarchy of variables.
**/
export class RuntimeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
