import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";


export enum GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    DirectIntent = "DIRECT_INTENT",
    ParameterFilling = "PARAMETER_FILLING",
    NoMatch = "NO_MATCH",
    NoInput = "NO_INPUT",
    Event = "EVENT"
}


// GoogleCloudDialogflowCxV3beta1Match
/** 
 * Represents one match result of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3beta1Match extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: GoogleCloudDialogflowCxV3beta1Intent;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resolvedInput" })
  resolvedInput?: string;
}
