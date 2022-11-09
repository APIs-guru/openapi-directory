import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum {
    UrlTypeHintUnspecified = "URL_TYPE_HINT_UNSPECIFIED"
,    AmpAction = "AMP_ACTION"
,    AmpContent = "AMP_CONTENT"
}


// GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction
/** 
 * Actions on Google action to open a given url.
**/
export class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=urlTypeHint" })
  urlTypeHint?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
}
