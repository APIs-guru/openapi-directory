import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum {
    CopyModeUnspecified = "COPY_MODE_UNSPECIFIED"
,    DoNotCopy = "DO_NOT_COPY"
,    AlwaysCopy = "ALWAYS_COPY"
,    CopyAppliable = "COPY_APPLIABLE"
}

export enum GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC"
,    LabelViewFull = "LABEL_VIEW_FULL"
}


// GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest
/** 
 * Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \
**/
export class GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyMode" })
  copyMode?: GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;

  @Metadata({ data: "json, name=view" })
  view?: GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum;
}
