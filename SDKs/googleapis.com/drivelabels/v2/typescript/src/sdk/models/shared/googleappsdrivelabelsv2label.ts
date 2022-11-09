import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2LabelAppliedCapabilities } from "./googleappsdrivelabelsv2labelappliedcapabilities";
import { GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2labelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2LabelDisplayHints } from "./googleappsdrivelabelsv2labeldisplayhints";
import { GoogleAppsDriveLabelsV2Field } from "./googleappsdrivelabelsv2field";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2LabelProperties } from "./googleappsdrivelabelsv2labelproperties";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2LabelSchemaCapabilities } from "./googleappsdrivelabelsv2labelschemacapabilities";

export enum GoogleAppsDriveLabelsV2LabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED"
,    Shared = "SHARED"
,    Admin = "ADMIN"
}


// GoogleAppsDriveLabelsV2Label
/** 
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
export class GoogleAppsDriveLabelsV2Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2LabelAppliedCapabilities;

  @Metadata({ data: "json, name=appliedLabelPolicy" })
  appliedLabelPolicy?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @Metadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2LabelDisplayHints;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleAppsDriveLabelsV2Field })
  fields?: GoogleAppsDriveLabelsV2Field[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labelType" })
  labelType?: GoogleAppsDriveLabelsV2LabelLabelTypeEnum;

  @Metadata({ data: "json, name=learnMoreUri" })
  learnMoreUri?: string;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2LockStatus;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2LabelProperties;

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionCreator" })
  revisionCreator?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
}
