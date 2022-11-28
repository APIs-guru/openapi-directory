import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2LabelAppliedCapabilities } from "./googleappsdrivelabelsv2labelappliedcapabilities";
import { GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2labelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2LabelDisplayHints } from "./googleappsdrivelabelsv2labeldisplayhints";
import { GoogleAppsDriveLabelsV2Field } from "./googleappsdrivelabelsv2field";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2LabelProperties } from "./googleappsdrivelabelsv2labelproperties";
import { GoogleAppsDriveLabelsV2LabelSchemaCapabilities } from "./googleappsdrivelabelsv2labelschemacapabilities";


export enum GoogleAppsDriveLabelsV2LabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Shared = "SHARED",
    Admin = "ADMIN"
}


// GoogleAppsDriveLabelsV2Label
/** 
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
export class GoogleAppsDriveLabelsV2Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2LabelAppliedCapabilities;

  @SpeakeasyMetadata({ data: "json, name=appliedLabelPolicy" })
  appliedLabelPolicy?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @SpeakeasyMetadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2LabelDisplayHints;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleAppsDriveLabelsV2Field })
  fields?: GoogleAppsDriveLabelsV2Field[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labelType" })
  labelType?: GoogleAppsDriveLabelsV2LabelLabelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=learnMoreUri" })
  learnMoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2LockStatus;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2LabelProperties;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionCreator" })
  revisionCreator?: GoogleAppsDriveLabelsV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
}
