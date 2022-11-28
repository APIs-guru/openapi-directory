import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1AdditionalTargetKeyName } from "./googlechromepolicyversionsv1additionaltargetkeyname";
import { Proto2FileDescriptorProto } from "./proto2filedescriptorproto";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDescription } from "./googlechromepolicyversionsv1policyschemafielddescription";
import { GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription } from "./googlechromepolicyversionsv1policyschemanoticedescription";
import { ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle } from "./chromecrosdpanelautosettingsprotopolicyapilifecycle";


export enum GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum {
    TargetResourceUnspecified = "TARGET_RESOURCE_UNSPECIFIED",
    OrgUnit = "ORG_UNIT",
    Group = "GROUP"
}


// GoogleChromePolicyVersionsV1PolicySchema
/** 
 * Resource representing a policy schema.
**/
export class GoogleChromePolicyVersionsV1PolicySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessRestrictions" })
  accessRestrictions?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalTargetKeyNames", elemType: GoogleChromePolicyVersionsV1AdditionalTargetKeyName })
  additionalTargetKeyNames?: GoogleChromePolicyVersionsV1AdditionalTargetKeyName[];

  @SpeakeasyMetadata({ data: "json, name=categoryTitle" })
  categoryTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: Proto2FileDescriptorProto;

  @SpeakeasyMetadata({ data: "json, name=fieldDescriptions", elemType: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription })
  fieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notices", elemType: GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription })
  notices?: GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription[];

  @SpeakeasyMetadata({ data: "json, name=policyApiLifecycle" })
  policyApiLifecycle?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle;

  @SpeakeasyMetadata({ data: "json, name=policyApiLifeycle" })
  policyApiLifeycle?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle;

  @SpeakeasyMetadata({ data: "json, name=policyDescription" })
  policyDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaName" })
  schemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=supportUri" })
  supportUri?: string;

  @SpeakeasyMetadata({ data: "json, name=validTargetResources" })
  validTargetResources?: GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum[];
}
