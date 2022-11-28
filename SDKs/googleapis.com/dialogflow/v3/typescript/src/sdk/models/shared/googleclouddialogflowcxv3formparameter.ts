import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3FormParameterFillBehavior } from "./googleclouddialogflowcxv3formparameterfillbehavior";
import { GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput } from "./googleclouddialogflowcxv3formparameterfillbehavior";



// GoogleCloudDialogflowCxV3FormParameter
/** 
 * Represents a form parameter.
**/
export class GoogleCloudDialogflowCxV3FormParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=fillBehavior" })
  fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehavior;

  @SpeakeasyMetadata({ data: "json, name=isList" })
  isList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redact" })
  redact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}


// GoogleCloudDialogflowCxV3FormParameterInput
/** 
 * Represents a form parameter.
**/
export class GoogleCloudDialogflowCxV3FormParameterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=fillBehavior" })
  fillBehavior?: GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput;

  @SpeakeasyMetadata({ data: "json, name=isList" })
  isList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redact" })
  redact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
