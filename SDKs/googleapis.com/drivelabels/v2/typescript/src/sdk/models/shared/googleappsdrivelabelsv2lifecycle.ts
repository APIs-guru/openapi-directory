import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2LifecycleDisabledPolicy } from "./googleappsdrivelabelsv2lifecycledisabledpolicy";

export enum GoogleAppsDriveLabelsV2LifecycleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    UnpublishedDraft = "UNPUBLISHED_DRAFT"
,    Published = "PUBLISHED"
,    Disabled = "DISABLED"
,    Deleted = "DELETED"
}


// GoogleAppsDriveLabelsV2Lifecycle
/** 
 * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
**/
export class GoogleAppsDriveLabelsV2Lifecycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabledPolicy" })
  disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;

  @Metadata({ data: "json, name=hasUnpublishedChanges" })
  hasUnpublishedChanges?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: GoogleAppsDriveLabelsV2LifecycleStateEnum;
}
