import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1AdditionalTargetKeyName } from "./googlechromepolicyversionsv1additionaltargetkeyname";
import { Proto2FileDescriptorProto } from "./proto2filedescriptorproto";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDescription } from "./googlechromepolicyversionsv1policyschemafielddescription";
import { GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription } from "./googlechromepolicyversionsv1policyschemanoticedescription";
import { ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle } from "./chromecrosdpanelautosettingsprotopolicyapilifecycle";
import { ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle } from "./chromecrosdpanelautosettingsprotopolicyapilifecycle";

export enum GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum {
    TargetResourceUnspecified = "TARGET_RESOURCE_UNSPECIFIED"
,    OrgUnit = "ORG_UNIT"
,    Group = "GROUP"
}


// GoogleChromePolicyVersionsV1PolicySchema
/** 
 * Resource representing a policy schema.
**/
export class GoogleChromePolicyVersionsV1PolicySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessRestrictions" })
  accessRestrictions?: string[];

  @Metadata({ data: "json, name=additionalTargetKeyNames", elemType: shared.GoogleChromePolicyVersionsV1AdditionalTargetKeyName })
  additionalTargetKeyNames?: GoogleChromePolicyVersionsV1AdditionalTargetKeyName[];

  @Metadata({ data: "json, name=categoryTitle" })
  categoryTitle?: string;

  @Metadata({ data: "json, name=definition" })
  definition?: Proto2FileDescriptorProto;

  @Metadata({ data: "json, name=fieldDescriptions", elemType: shared.GoogleChromePolicyVersionsV1PolicySchemaFieldDescription })
  fieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notices", elemType: shared.GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription })
  notices?: GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription[];

  @Metadata({ data: "json, name=policyApiLifecycle" })
  policyApiLifecycle?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle;

  @Metadata({ data: "json, name=policyApiLifeycle" })
  policyApiLifeycle?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle;

  @Metadata({ data: "json, name=policyDescription" })
  policyDescription?: string;

  @Metadata({ data: "json, name=schemaName" })
  schemaName?: string;

  @Metadata({ data: "json, name=supportUri" })
  supportUri?: string;

  @Metadata({ data: "json, name=validTargetResources" })
  validTargetResources?: GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum[];
}
