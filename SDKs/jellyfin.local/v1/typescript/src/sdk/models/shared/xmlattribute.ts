import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// XmlAttribute
/** 
 * Defines the MediaBrowser.Model.Dlna.XmlAttribute.
**/
export class XmlAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
