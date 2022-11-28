import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities } from "./googleappsdrivelabelsv2betalabelappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2betalabelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaLabelDisplayHints } from "./googleappsdrivelabelsv2betalabeldisplayhints";
import { GoogleAppsDriveLabelsV2betaFieldInput } from "./googleappsdrivelabelsv2betafield";
import { GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLabelProperties } from "./googleappsdrivelabelsv2betalabelproperties";
import { GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities } from "./googleappsdrivelabelsv2betalabelschemacapabilities";
import { GoogleAppsDriveLabelsV2betaField } from "./googleappsdrivelabelsv2betafield";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";


export enum GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Shared = "SHARED",
    Admin = "ADMIN"
}


// GoogleAppsDriveLabelsV2betaLabelInput
/** 
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
export class GoogleAppsDriveLabelsV2betaLabelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;

  @SpeakeasyMetadata({ data: "json, name=appliedLabelPolicy" })
  appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleAppsDriveLabelsV2betaFieldInput })
  fields?: GoogleAppsDriveLabelsV2betaFieldInput[];

  @SpeakeasyMetadata({ data: "json, name=labelType" })
  labelType?: GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=learnMoreUri" })
  learnMoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycleInput;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaLabelProperties;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=revisionCreator" })
  revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
}


// GoogleAppsDriveLabelsV2betaLabel
/** 
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
export class GoogleAppsDriveLabelsV2betaLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;

  @SpeakeasyMetadata({ data: "json, name=appliedLabelPolicy" })
  appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @SpeakeasyMetadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleAppsDriveLabelsV2betaField })
  fields?: GoogleAppsDriveLabelsV2betaField[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labelType" })
  labelType?: GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=learnMoreUri" })
  learnMoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaLabelProperties;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionCreator" })
  revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
}
