package shared

// GoogleAppsCardV1ActionParameter
// List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters. To learn more, see [CommonEventObject](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject).
type GoogleAppsCardV1ActionParameter struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
