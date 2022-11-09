import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Form
/** 
 * Google Forms item.
**/
export class Form extends SpeakeasyBase {
  @Metadata({ data: "json, name=formUrl" })
  formUrl?: string;

  @Metadata({ data: "json, name=responseUrl" })
  responseUrl?: string;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
