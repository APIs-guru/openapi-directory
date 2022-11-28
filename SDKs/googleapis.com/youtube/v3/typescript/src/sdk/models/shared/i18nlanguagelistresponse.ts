import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { I18nLanguage } from "./i18nlanguage";



export class I18nLanguageListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: I18nLanguage })
  items?: I18nLanguage[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
