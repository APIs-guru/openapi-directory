import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// XmlAttribute
/** 
 * Defines the MediaBrowser.Model.Dlna.XmlAttribute.
**/
export class XmlAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
