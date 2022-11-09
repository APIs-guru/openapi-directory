import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities } from "./googleappsdrivelabelsv2betalabelappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2betalabelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaLabelDisplayHints } from "./googleappsdrivelabelsv2betalabeldisplayhints";
import { GoogleAppsDriveLabelsV2betaField } from "./googleappsdrivelabelsv2betafield";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaLabelProperties } from "./googleappsdrivelabelsv2betalabelproperties";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities } from "./googleappsdrivelabelsv2betalabelschemacapabilities";

export enum GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED"
,    Shared = "SHARED"
,    Admin = "ADMIN"
}


// GoogleAppsDriveLabelsV2betaLabel
/** 
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
export class GoogleAppsDriveLabelsV2betaLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;

  @Metadata({ data: "json, name=appliedLabelPolicy" })
  appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @Metadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleAppsDriveLabelsV2betaField })
  fields?: GoogleAppsDriveLabelsV2betaField[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labelType" })
  labelType?: GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;

  @Metadata({ data: "json, name=learnMoreUri" })
  learnMoreUri?: string;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaLabelProperties;

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionCreator" })
  revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
}
