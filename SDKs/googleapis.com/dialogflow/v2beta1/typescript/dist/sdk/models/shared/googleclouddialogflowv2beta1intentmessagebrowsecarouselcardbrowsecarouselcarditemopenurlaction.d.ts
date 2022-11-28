import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum {
    UrlTypeHintUnspecified = "URL_TYPE_HINT_UNSPECIFIED",
    AmpAction = "AMP_ACTION",
    AmpContent = "AMP_CONTENT"
}
/**
 * Actions on Google action to open a given url.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction extends SpeakeasyBase {
    url?: string;
    urlTypeHint?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
}
