import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFactcheckingFactchecktoolsV1alpha1Publisher
/** 
 * Information about the publisher.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1Publisher extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=site" })
  site?: string;
}
