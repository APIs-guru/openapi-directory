import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFactcheckingFactchecktoolsV1alpha1Publisher
/** 
 * Information about the publisher.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1Publisher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: string;
}
