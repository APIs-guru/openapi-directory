import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppCategoryTargetingOptionDetails
/** 
 * Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
**/
export class AppCategoryTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
