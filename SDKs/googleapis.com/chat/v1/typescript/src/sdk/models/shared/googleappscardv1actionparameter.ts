import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCardV1ActionParameter
/** 
 * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters. To learn more, see [CommonEventObject](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject).
**/
export class GoogleAppsCardV1ActionParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
