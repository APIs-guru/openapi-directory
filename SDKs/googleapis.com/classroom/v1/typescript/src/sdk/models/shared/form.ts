import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Form
/** 
 * Google Forms item.
**/
export class Form extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formUrl" })
  formUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=responseUrl" })
  responseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
