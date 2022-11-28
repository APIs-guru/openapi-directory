import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum {
    UrlTypeHintUnspecified = "URL_TYPE_HINT_UNSPECIFIED",
    AmpAction = "AMP_ACTION",
    AmpContent = "AMP_CONTENT"
}


// GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction
/** 
 * Actions on Google action to open a given url.
**/
export class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urlTypeHint" })
  urlTypeHint?: GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
}
