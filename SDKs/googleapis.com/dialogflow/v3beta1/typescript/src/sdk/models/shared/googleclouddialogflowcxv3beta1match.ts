import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";

export enum GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED"
,    Intent = "INTENT"
,    DirectIntent = "DIRECT_INTENT"
,    ParameterFilling = "PARAMETER_FILLING"
,    NoMatch = "NO_MATCH"
,    NoInput = "NO_INPUT"
,    Event = "EVENT"
}


// GoogleCloudDialogflowCxV3beta1Match
/** 
 * Represents one match result of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3beta1Match extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=event" })
  event?: string;

  @Metadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowCxV3beta1Intent;

  @Metadata({ data: "json, name=matchType" })
  matchType?: GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=resolvedInput" })
  resolvedInput?: string;
}
