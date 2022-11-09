import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior } from "./googleclouddialogflowcxv3beta1formparameterfillbehavior";


// GoogleCloudDialogflowCxV3beta1FormParameter
/** 
 * Represents a form parameter.
**/
export class GoogleCloudDialogflowCxV3beta1FormParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityType" })
  entityType?: string;

  @Metadata({ data: "json, name=fillBehavior" })
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;

  @Metadata({ data: "json, name=isList" })
  isList?: boolean;

  @Metadata({ data: "json, name=redact" })
  redact?: boolean;

  @Metadata({ data: "json, name=required" })
  required?: boolean;
}
