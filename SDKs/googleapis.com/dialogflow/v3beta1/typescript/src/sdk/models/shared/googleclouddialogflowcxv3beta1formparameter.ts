import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior } from "./googleclouddialogflowcxv3beta1formparameterfillbehavior";
import { GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput } from "./googleclouddialogflowcxv3beta1formparameterfillbehavior";



// GoogleCloudDialogflowCxV3beta1FormParameter
/** 
 * Represents a form parameter.
**/
export class GoogleCloudDialogflowCxV3beta1FormParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=fillBehavior" })
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;

  @SpeakeasyMetadata({ data: "json, name=isList" })
  isList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redact" })
  redact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}


// GoogleCloudDialogflowCxV3beta1FormParameterInput
/** 
 * Represents a form parameter.
**/
export class GoogleCloudDialogflowCxV3beta1FormParameterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=fillBehavior" })
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput;

  @SpeakeasyMetadata({ data: "json, name=isList" })
  isList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redact" })
  redact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
